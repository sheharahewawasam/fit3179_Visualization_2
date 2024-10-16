let year1 = 1991;
let year2 = 1991;
let year3 = 1991;
var countries = ["Afghanistan", "Albania", "Algeria", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of Congo", "Denmark", "Djibouti", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
let index = 0;
let field = "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 15-24 - Sex: Female";
let list = [
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 15-24 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 25-34 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 35-44 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 45-54 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 55-64 - Sex: Female",
  "Labour force by sex and age -- ILO modelled estimates, July 2017 (thousands) - 10-year age bands: 65+ - Sex: Female"
];
var countries2 = ["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of Congo", "Denmark", "Djibouti", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland"];
var countries3 = ["Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chile", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lesotho", "Liberia", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritius", "Mexico", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
const mapSpecs = {}; // Object to store Vega specifications

// Event Listeners
document.getElementById('year').addEventListener('change', function(event) {
    updateYear(parseInt(event.target.value));
});
document.getElementById('button').addEventListener('click', increaseValue);
function increaseValue() {
    index += 1;
    if (index >= list.length) {
        index = 0;
    }
    field = list[index];
    document.getElementById('valueDisplay').innerText = field;
    updateMap2Spec();
}
// Function to update the year and limit it based on data availability
function updateYear(value) {
    year1 = value;
    year2 = value;
    year3 = value;
    if (value > 2022 ){
        year1 = 2022;
        let text1 = "Data only available until 2022";
        document.getElementById('yearlimit1').innerText = text1;
    }
    if (value > 2016 ){
        year3 = 2016;
        let text2 = "Data only available until 2016";
        document.getElementById('yearlimit4').innerText = text2;
    }
    document.getElementById('YValue').innerText = value;
    updateMapVisualizations();
}

// Function to update all Vega visualizations
function updateMapVisualizations() {
    // Update specifications for each map based on the current year and state
    updateMap1Spec();
    updateMap2Spec();
    updateMap3Spec();
    updateMap4Spec();

    // Embed updated Vega visualizations
    Object.keys(mapSpecs).forEach(key => {
        vegaEmbed(`#${key}`, mapSpecs[key]).then(result => {
            console.log(`${key} visualization updated.`);
        }).catch(console.error);
    });
}

// Definitions of functions to update specifications for each map
function updateMap1Spec() {
    // Example: Update map1 specification based on currentYear and currentState
    mapSpecs['map1'] = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "background":"#fff8f9",
        "title": "Ratio of female to male labor force participation rate throughout the years",
        "width": 800,
        "height": 400,
        "projection": {"type": "equalEarth"},
        "params": [
          {
            "name": "year",
            "value": year1,
            "bind": {
              "input": "select",
              "options": [
                1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
                2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
                2021, 2022, 2023, 2024
              ]
            }
          }
        ],
        "layer": [
          {
            "data": {
              "url": "https://vega.github.io/editor/data/world-110m.json",
              "format": {"type": "topojson", "feature": "countries"}
            },
            "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "gray"}
          },
          {
            "data": {
              "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/7_others/oceans.topojson",
              "format": {"type": "topojson", "feature": "oceans"}
            },
            "mark": {"type": "geoshape", "fill": "skyblue"}
          },
          {
            "data": {
              "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/2_symbol_map/js/WorldMapWithGraticules.topojson",
              "format": {"type": "topojson", "feature": "ne_110m_graticules_30"}
            },
            "mark": {"type": "geoshape", "fill": "null", "stroke": "lightgray"}
          },
          {
            "data": {
              "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Homework-10/ratio-of-female-to-male-labor-force-participation-rates-ilo-wdi.csv",
              "format": {"type": "csv"}
            },
            "transform": [
              {
                "lookup": "Code",
                "from": {
                  "data": {
                    "url": "https://raw.githubusercontent.com/samwzlim/FIT3179/main/week9_homework/js/ne_110m.topojson",
                    "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
                  },
                  "key": "properties.ISO_A3"
                },
                "as": "geo"
              },
              {"filter": "datum.Year == year"}
            ],
            "mark": {"type": "geoshape","stroke": "grey", "strokeWidth": 1},
            "encoding": {
              "shape": {"field": "geo", "type": "geojson"},
              "color": {
                "field": "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)",
                "type": "quantitative",
                "title": "Ratio of female to male labor force participation rate (%)",
                "scale": {
                  "type": "linear",
                  "scheme": "reds"
                }
              },
              "tooltip": [
                {"field": "Entity", "type": "nominal", "title": "Country"},
                {
                  "field": "Ratio of female to male labor force participation rate (%) (modeled ILO estimate)",
                  "type": "quantitative",
                  "title": "Ratio of female to male labor force participation rate (%)"
                },
                {"field": "Year", "type": "quantitative"}
              ]
            }
          }
        ]
      };
}

function updateMap2Spec() {
    // Update map2 specification
    mapSpecs['map2'] = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "background":"#fff8f9",
        "width": 700,
        "height": 400,
        "description": "A bar chart with highlighting on hover and selecting on click, with field selectors.",
        "data": {
            "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Homework-10/female-labor-force-by-age.csv",
            "format": {"type": "csv"}
        },
        "params": [
          {
            "name": "year",
            "value": year2,
            "bind": {
              "input": "select",
              "options":[
                1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024
              ]
            }
          },
          {
            "name": "entity1",
            "value": ["Afghanistan"],
            "bind": {
              "input": "select",
              "options": countries,
              "name": "Select Country: "
            }
          },
          {
            "name": "entity2",
            "value": ["Albania"],
            "bind": {
              "input": "select",
              "options": countries,
              "name": "Select Country: "
            }
          },
          {
            "name": "entity3",
            "value": ["Algeria"],
            "bind": {
              "input": "select",
              "options": countries,
              "name": "Select Country: "
            }
          },
          {
            "name": "entity4",
            "value": ["Argentina"],
            "bind": {
              "input": "select",
              "options": countries,
              "name": "Select Country: "
            }
          },
          {
            "name": "entity5",
            "value": ["Armenia"],
            "bind": {
              "input": "select",
              "options": countries,
              "name": "Select Country: "
            }
          },
          {
            "name": "highlight",
            "select": {"type": "point", "on": "mouseover"}
          },
          {
            "name": "select",
            "select": {"type": "point", "on": "click"}
          }
        ],
        "transform": [
            {
                "filter": "datum['Year'] == year"
            },
            {
                "filter": "(datum['Entity'] == entity1 || datum['Entity'] == entity2 || datum['Entity'] == entity3 || datum['Entity'] == entity4 || datum['Entity'] == entity5)"
            }
        ],
        "mark": {
            "type": "bar",
            "fill": "#fa2a55",
            "stroke": "black",
            "cursor": "pointer"
        },
        "encoding": {
            "y": {
                "field": field,
                "type": "quantitative",
                "axis": {
                    "title": "Labour force"
                }
            },
            "x": {
                "field": "Entity",
                "type": "ordinal",
                "axis": {
                    "title": "Country"
                }
            },
            "tooltip": [
                {
                    "field": field,
                    "type": "quantitative"
                }
            ],
            "fillOpacity": {
                "condition": {"param": "select", "value": 1},
                "value": 0.3
            },
            "strokeWidth": {
                "condition": [
                    {"param": "select", "value": 2},
                    {"param": "highlight", "value": 1}
                ],
                "value": 0
            }
        },
        "config": {
            "scale": {
                "bandPaddingInner": 0.2
            }
        }
    };
}

function updateMap3Spec() {
    // Update map3 specification
    mapSpecs['map3'] = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "background":"#fff8f9",
        "width": 700,
        "height": 400,
        "description": "Female labor force participation rate in Afghanistan over time.",
        "data": {
          "url": "https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Visualization_II/female-labor-force-participation-rates.csv"
        },
        "params": [
          {
                "name": "entity1",
                "value": ["Algeria"],
                "bind": {
                  "input": "select",
                  "options": countries2,
                  "name": "Select Country: "
                }
              },
              {
                "name": "entity2",
                "value": ["Afghanistan"],
                "bind": {
                  "input": "select",
                  "options": countries2,
                  "name": "Select Country: "
                }
              },
              {
                "name": "entity3",
                "value": ["Angola"],
                "bind": {
                  "input": "select",
                  "options": countries2,
                  "name": "Select Country: "
                }
              },
              {
                "name": "entity4",
                "value": ["Albania"],
                "bind": {
                  "input": "select",
                  "options": countries2,
                  "name": "Select Country: "
                }
              },
              {
                "name": "entity5",
                "value": ["Argentina"],
                "bind": {
                  "input": "select",
                  "options": countries2,
                  "name": "Select Country: "
                }
              }
        ],
      "layer": [
          {
            "mark": {
              "type": "line",
              "strokeWidth": 3,
              "tooltip": true,
              "point": true
            },
            "transform": [
              {
                "filter": "(datum['Entity'] == entity1 || datum['Entity'] == entity2 || datum['Entity'] == entity3 || datum['Entity'] == entity4 || datum['Entity'] == entity5)"
              }
            ],
            "encoding": {
              "x": {
                "type": "quantitative",
                "field": "Year"
              },
              "y": {
                "type": "quantitative",
                "field": "Labor force participation rate, female (% of female population ages 15+) (modeled ILO estimate)",
                "title": "Labor force participation rate"
              },
              "color": {
                "type": "nominal",
                "field": "Entity"
              },
              "opacity": {  "condition": {"param": "entity1", "value": 2}, "value": 0},
              "tooltip": [
                {"field": "Entity", "type": "nominal"},
                {"field": "Year", "type": "quantitative"},
                {"field": "Labor force participation rate, female (% of female population ages 15+) (modeled ILO estimate)"},
              ]
            }
          },
          {
            "mark": {
              "type": "rule",
              "color": "darkgray",
              "strokeWidth": 2
            },
            "encoding": {
              "x": {
                "datum": year2, 
                "type": "quantitative"
              }
            }
          }
        ]
      };
}

function updateMap4Spec() {
    // Update map4 specification
    mapSpecs['map4'] = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "background":"#fff8f9",
        "width": 700,
        "height": 400,
        "description": "Pie Chart with percentage_tooltip",
        "data": {"url":"https://raw.githubusercontent.com/sheharahewawasam/fit3179/refs/heads/Visualization_II/Transformed_Female_Share_Employment_By_Sector.csv"
        },
        "params":[
          {
            "name": "year",
            "value": year3,
            "bind": {
              "input": "select",
              "options": [
                1970,
                1971,1972,1973,1974,1975,1976,1977,1978,1979,
                1980,
                1981,1982,1983,1984,1985,1986,1987,1988,1989,
                1990,
                1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
                2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                2011, 2012, 2013, 2014, 2015, 2016
              ]
            }
          },
          {
            "name": "entity1",
            "value": ["Australia"],
            "bind": {
              "input": "select",
              "options": countries3,
              "name": "Select Country: "
            }
          }
        ],
        "transform": [
          {"filter":"datum.Entity == entity1"},
          {"filter":"datum.Year == year"}
        ],
        "mark": {"type": "arc", "tooltip": true},
        "encoding": {
          "theta": {"field": "Female share employment", "type": "quantitative", "stack": "normalize"},
          "color": {"field": "Sector", "type": "nominal"}
        }
      };
}

// Initial load of visualizations
updateMapVisualizations();
