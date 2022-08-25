 const expect = require("chai").expect
 const env = require("dotenv").config()
 const apiLoc =  async (value, method) => {
  const response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${env.parsed.API_KEY}`, {
    method : method
  })
  .then(res => res.json())
  .then (json =>  {

    return {
      cod : json.cod,
      message : json.message,
      lat : json.cod == 200 ? json.coord.lat : "",
      lon :  json.cod == 200 ? json.coord.lon : "",
      name :  json.cod == 200  ? json.name : ""
    }
  })
  .catch((err) => {
    return {
      message: err.message,
      cod : err.cod,
    }
  })
  return  response
}

const dayDisplay = (timestamp) => {
  let newTime = parseInt(timestamp)
  if(!newTime || isNaN(timestamp)) {
    return "timestamp have not a valid value"
  }

  const date = new Date(newTime * 1000);
  const days = date.getDay();
  let day = '';
  switch (days) {
    case 0:
      day = 'Dimanche';
      break;
    case 1:
      day = 'Lundi';
      break;
    case 2:
      day = 'Mardi';
      break;
    case 3:
      day = 'Mercredi';
      break;
    case 4:
      day = 'Jeudi';
      break;
    case 5:
      day = 'Vendredi';
      break;
    case 6:
      day = 'Samedi';
      break;
  }
  return day;
};
//search the nim or max temperature in on journey
const searchTemp = (meteoHourly, research ) => {
  if (!meteoHourly || !research) {
    return "params empty"
  }
  if (typeof meteoHourly !== "object") {
    return "params meteoHourly did not type object"
  }
  if (research !== "min" && research !== "max") {
    return "params research can be  contained only max or min"
  }
  let data = meteoHourly.map((tempMin) => (tempMin.temp));
  let result = research == "min" ?  Math.min(...data) :  Math.max(...data)
  return result
};

let meteoFictiveHourly1 = [
  {temp : -5},
  {temp : -10},
  {temp : -1},
  {temp : 15},
  {temp : 18}
]
let meteoFictiveHourly2 = [
  {temp : 5},
  {temp : -2 },
  {temp : 9},
  {temp : 24},
  {temp : -20 }
]
let meteoFictiveHourly3 = [
  {temp : 10},
  {temp : 22 },
  {temp : -18 },
  {temp : 32},
  {temp : 18 }
]
  


describe("localisation api", () => {
  describe("with bad town", () => {
    it("must return message 404 town no found" , async() => {
      expect( await apiLoc("pariss", "GET")).to.include({ cod: '404', message: 'city not found'})
    })
  })
  describe("allowed Method", () => {
    it("must return message 405 Internal error" , async() => {
      expect( await apiLoc("paris", "PATCH")).to.include({ cod: '405', message: 'Internal error'})
      expect( await apiLoc("paris", "DELETE")).to.include({ cod: '405', message: 'Internal error'})
      expect( await apiLoc("paris", "PUT")).to.include({ cod: '405', message: 'Internal error'})
    })
  })

  describe("Lon et Lat verification", () => {
    it("must return longitude && latitude" , async() => {
      expect( await apiLoc("paris", "GET")).to.have.property('lon').and.to.be.a("number")
      expect( await apiLoc("paris", "GET")).to.have.property('lat').and.to.be.a("number")
      expect( await apiLoc("lille", "GET")).to.have.property('lon').and.to.be.a("number")
      expect( await apiLoc("lille", "GET")).to.have.property('lat').and.to.be.a("number")
    })
  })

  describe("verification Town in enter & in return", () => {
    it("params town and api response name must be identical but in capitalise" , async() => {
      expect( await apiLoc("paris", "GET")).to.have.property('name').and.to.equal("Paris")
      expect( await apiLoc("lille", "GET")).to.have.property('name').and.to.equal("Lille")
      
    })
  })
})

describe("function day display" , () => {
  describe("with time stamp at 22 08 2022", () => {
     it("must be return actual Lundi", () => {  
      expect(dayDisplay( 1661178000)).to.equal("Lundi")
    })
  })
  describe("with time stamp at 26 08 2022", () => {
    it("must be return actual Lundi", () => {  
      expect(dayDisplay(1661523600)).to.equal("Vendredi")
   })
 })
  describe("with not valid value", () => {
    describe("with string", () => {
       it("must be return timestamp have not a valid value", () => {  
        expect(dayDisplay('444test')).to.equal("timestamp have not a valid value")
      })
    })
    describe("with empty characters", () => {
      it("must be return timestamp have not a valid value", () => {  
       expect(dayDisplay('  ')).to.equal("timestamp have not a valid value")
     })
   })
    describe("with escape ", () => {
      let escape = "escape"
      it("must be return timestamp have not a valid value", () => {  
        expect(dayDisplay(`${escape}`)).to.equal("timestamp have not a valid value")
      })
    })
  })
})

describe('function searchTemp', () => {
  describe("whith not valid data", () => {
    describe("with type different to object  as params meteoHourly", () => {
      it("must be return params meteoHourly bad type", () => {
        expect(searchTemp("test", 'min')).to.equal("params meteoHourly did not type object")
        expect(searchTemp(3, 'min')).to.equal("params meteoHourly did not type object")
      })
    })
    describe("with different to string as params params research can be  contained only max or min", () => {
      it("must be return params meteoHourly bad type", () => {
        expect(searchTemp({temp: 3}, 'toto')).to.equal("params research can be  contained only max or min")
        expect(searchTemp({temp :2}, {min : "min"})).to.equal("params research can be  contained only max or min")
      })
    })
    describe("with empty characters", () => {
      it("must be return params empty", () => {
        expect(searchTemp()).to.equal("params empty")
        expect(searchTemp("", "min")).to.equal("params empty")
        expect(searchTemp({temp:3}, undefined)).to.equal("params empty")
      })
    })
  })
  describe("test return ",  () => {
    it("must be a number", () => {
      expect(searchTemp(meteoFictiveHourly1, "min")).to.be.a("number")
      expect(searchTemp(meteoFictiveHourly1, "max")).to.be.a("number")
    })
    describe(" the biggest", () => {
      it('must be return 18', () => {
        expect(searchTemp(meteoFictiveHourly1, "max")).to.equal(18)
      })
      it('must be return 24', () => {
        expect(searchTemp(meteoFictiveHourly2, "max")).to.equal(24)
      })
      it('must be return 32', () => {
        expect(searchTemp(meteoFictiveHourly3, "max")).to.equal(32)
      })
    })

    describe(" the smaller", () => {
      it('must be return -10', () => {
        expect(searchTemp(meteoFictiveHourly1, "min")).to.equal(-10)
      })
      it('must be return -20', () => {
        expect(searchTemp(meteoFictiveHourly2, "min")).to.equal(-20)
      })
      it('must be return -18', () => {
        expect(searchTemp(meteoFictiveHourly3, "min")).to.equal(-18)
      })
    })
  })
})





