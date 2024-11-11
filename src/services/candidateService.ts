import candidateSchema from "../models/candidateSchema"

export const ceed = async () => {
    try {
        const cands = [{
            name: "nettanel",
            image: "https://randomuser.me/api/portraits/med/men/75.jpg"
        },
        {
            name: "shmuel",
            image: "https://randomuser.me/api/portraits/med/men/74.jpg"
        },
        {
            name: "yogi",
            image: "https://randomuser.me/api/portraits/med/men/73.jpg"
        },
        {
            name: "dan",
            image: "https://randomuser.me/api/portraits/med/men/72.jpg"
        },
        {
            name: "gad",
            image: "https://randomuser.me/api/portraits/med/men/71.jpg"
        },
        {
            name: "yos",
            image: "https://randomuser.me/api/portraits/med/men/55.jpg"
        },
        {
            name: "shimu",
            image: "https://randomuser.me/api/portraits/med/men/35.jpg"
        },]
        for (const c in cands) {
            const newCand = new candidateSchema()
            await newCand.save()
        }
    } catch (error) {
        console.log("error in ceed candidate")
    }
}

export const getCandidateList = async()=>{
    try {
        const list = await candidateSchema.find({})
        return list
    } catch (error) {
        console.log(`getlist faild`)
    }
}