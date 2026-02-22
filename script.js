const btnOverview = document.querySelectorAll(".bt-overview")[0]
const btnStructure = document.querySelectorAll(".bt-overview")[1]
const planetImg = document.querySelector(".planet-img")
const planetDescription = document.querySelector(".planet-description")

// Descobre a página atual
const url = window.location.pathname
let pageName = window.location.pathname.split("/").pop() || "index"
let fixedPage = planets[pageName] ? pageName : "mercury"

// Prefixo para as imagens: se estiver em pages/, sobe uma pasta
const prefix = pageName === "index" ? "" : "../"

const planets = {
    mercury: {
        overview: {
            img: `${prefix}images/planet-mercury.svg`,
            text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        },
        structure: {
            img: `${prefix}images/planet-mercury-internal.svg`,
            text:"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3, only slightly less than Earth's density.",
        }
    },
    venus: {
        overview: {
            img: `${prefix}images/planet-venus.svg`,
            text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        },
        structure: {
            img: `${prefix}images/planet-venus-internal.svg`,
            text:"The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
        }
    },
    earth: {
        overview: {
            img: `${prefix}images/planet-earth.svg`,
            text: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        },
        structure: {
            img: `${prefix}images/planet-earth-internal.svg`,
            text:"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
        }
    },
    mars: {
        overview: {
            img: `${prefix}images/planet-mars.svg`,
            text: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet.",
        },
        structure: {
            img: `${prefix}images/planet-mars-internal.svg`,
            text:"Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
        }
    },
    jupiter: {
        overview: {
            img: `${prefix}images/planet-jupiter.svg`,
            text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
        },
        structure: {
            img: `${prefix}images/planet-jupiter-internal.svg`,
            text:"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
        }
    },
    saturn: {
        overview: {
            img: `${prefix}images/planet-saturn.svg`,
            text: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
        },
        structure: {
            img: `${prefix}images/planet-saturn-internal.svg`,
            text:"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
        }
    },
    uranus: {
        overview: {
            img: `${prefix}images/planet-uranus.svg`,
            text: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
        },
        structure: {
            img: `${prefix}images/planet-uranus-internal.svg`,
            text:"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron-nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
        }
    },
    neptune: {
        overview: {
            img: `${prefix}images/planet-neptune.svg`,
            text: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
        },
        structure: {
            img: `${prefix}images/planet-neptune-internal.svg`,
            text:"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia, and water are found in the lower regions.",
        }
    },
}

// Debug
console.log("fixedPage:", fixedPage)
console.log("planets keys:", Object.keys(planets))

function changeInfo(type) {
    const data = planets[fixedPage][type]

    planetImg.src = data.img
    planetDescription.textContent = data.text

    btnOverview.classList.remove("active-btn")
    btnStructure.classList.remove("active-btn")

    if (type === "overview") {
        btnOverview.classList.add("active-btn")
    } else {
        btnStructure.classList.add("active-btn")
    }
}

btnOverview.addEventListener("click", () => changeInfo("overview"))
btnStructure.addEventListener("click", () => changeInfo("structure"))

// Inicializa
changeInfo("overview")