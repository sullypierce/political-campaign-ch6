const elizabethsCampaign = {
    congressionalDistrict: "middle Tennessee",
    platform: {
        taxes: "as high as possible",
        jobs: "get rid of them",
        infrastructure: "no more roads!",
        healthCare: "whats that?",
        crimeAndEnforcement: "zero tolerance policy"
    },
    donationURL: "givemeyourmoney.com",
    calendarEvents: [],
    volunteerInfo: [
        {
            name: 'Jorge',
            address: "1 nunyabiznes av",
            email: "yuneedthis@youllneverfindme.com",
            phoneNumber: "555-NOPE",
            availability: "never",
            willingActivities: "none"
        }
    ],
    bio: "lots of info about the wonderful Elizabeth Sanger",
    images: {
        headShot: "",
        familyPic: "",
        constituentsPic: "",
    },
    missionStatement: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been... ever, for any reason whatsoever...",
    registerURL: "getyoselftothepolls.gov"
}

addToImageGallery = function(imageName, newImage) {
    elizabethsCampaign.images[imageName] = newImage;
};

changeBiography = function(newBiography) {
    elizabethsCampaign.bio = newBiography;
};

changePlatform = (topic, newPlatformStatement) => {
    elizabethsCampaign.platform[topic] = newPlatformStatement;
};