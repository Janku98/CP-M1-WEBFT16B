const expect = require('chai').expect;

/* eslint-disable no-undef */
const {
  closureDetect
} = require('../checkpoint.js');


describe('EJERCICIO 10: closureDetect', function() {
  var symptomsCovid = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
  var symptomsAngina = ['heaviness in chest', 'shortness of breath', 'nausea']
  var covidDetector = closureDetect(symptomsCovid, 3);
  var anginaDetector = closureDetect(symptomsAngina, 1)
  var personOne = {
    name: 'Franco',
    age: 26,
    symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
  }
  var personTwo = {
    name: 'Toni',
    age: 30,
    symptoms: ['congestion', 'tiredness', 'nausea']
  }
  var personThree = {
    name: 'Matias',
    age: 26,
    symptoms: ['heaviness in chest', 'shortness of breath']
  }
  it('Debe detectar casos positivos de COVID', function() {
    expect(covidDetector(personOne)).to.equal(true);
  });

  it('Debe detectar casos negativos de COVID', function() {
    expect(covidDetector(personTwo)).to.equal(false);
    expect(covidDetector(personThree)).to.equal(false);
  });

  it('Debe detectar casos positivos de Angina', function() {
    expect(anginaDetector(personTwo)).to.equal(true);
    expect(anginaDetector(personThree)).to.equal(true);
  });

  it('Debe detectar casos negativos de Angina', function() {
    expect(anginaDetector(personOne)).to.equal(false);
  });
});