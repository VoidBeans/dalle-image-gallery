const IMAGE_DATA = [
    {
        id: "image-001",
        description: "2 pigeons arguing over a bowl of noodles on a busy highway"
    },
    {
        id: "image-002",
        description: "a 17th century painting of a toddler feeding its parent beer"
    },
    {
        id: "image-003",
        description: "a man swimming in a pool of gold surrounded by a burned forest"
    },
    {
        id: "image-004",
        description: "a monkey with a trunk like an elephant stroking a panda in space"
    },
    {
        id: "image-005",
        description: "an astronaut doing laundry in the desert"
    },
    {
        id: "image-006",
        description: "pixel art of dwarves crossing a sky bridge"
    },
    {
        id: "image-007",
        description: "plant buying crypto currency at the new york stock exchange"
    },
    {
        id: "image-008",
        description: "speaker visually playing loud music next to a man with a hearing aid, digital art"
    },
    {
        id: "image-009",
        description: "troll sitting under a bridge smoking cannabis"
    },
    {
        id: "image-010",
        description: "wizard with a pointy hat programming a computer with saturn in the distance, digital art"
    },
    {
        id: "image-011",
        description: "frodo from lord of the rings holding the one ring as if it's a baby"
    },
    {
        id: "image-012",
        description: "horse kicking a man in the face, ancient egyptian art"
    },
    {
        id: "image-013",
        description: "mechanic playing a large spanner as a guitar"
    },
    {
        id: "image-014",
        description: "necromancer resurrecting his dead pet, digital art"
    },
    {
        id: "image-015",
        description: "oil painting of darth vader explaining maths to the egyptian god anubis with the statue of liberty in the background"
    },
    {
        id: "image-016",
        description: "child with four arms playing piano in the style of vaporwave"
    },
    {
        id: "image-017",
        description: "clearly stressed man with medium length brown hair planting chillis with a dog, digital art"
    },
    {
        id: "image-018",
        description: "dog in a tuxedo eating a french loaf while watching the sun set over the ocean"
    },
    {
        id: "image-019",
        description: "flat animation of a blond woman planting a sunflower with a rat companion"
    },
    {
        id: "image-020",
        description: "flat animation of a woman holding a round sign with html written on it"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.image').forEach(element => {
        element.addEventListener('click', handleClickImage);
    })

    document.getElementById("image-004").click();
    document.getElementById("image-010").click();
    document.getElementById("image-010").click();
    document.getElementById("image-014").click();
    document.getElementById("image-017").click();
});

function handleClickImage(event) {
    const targetImage = event.target;
    
    const targetImageSet = targetImage.dataset.imageSet;

    // Deactivate (minimise) all of the images in the image set.
    document.querySelectorAll('.image').forEach(image => {
        if (image.dataset.imageSet === targetImageSet) {
            image.classList.remove("active");
        }
    });

    // Activate (enlarge) the image that's been clicked.
    targetImage.classList.add("active");

    // Get the image's description.
    const imageDescription = IMAGE_DATA.filter(element => element.id === targetImage.id)[0].description;

    //  Display the image's description.
    document.getElementById(`image-description-${targetImageSet}`).innerHTML = imageDescription;
}
