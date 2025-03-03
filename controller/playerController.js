import Player from "../model/playerModel.js"

// Create controller
export const create = async (req, res) => {
    try {

        const playerData = new Player(req.body);
        const {number, name} = playerData;

        const playerNumberExist = await Player.findOne({number})
        const playerNameExist = await Player.findOne({name})

        if(playerNumberExist || playerNameExist){  
            return res.status(400).json({message: "Player already exists."})
        }
        const savedPlayer = await playerData.save();
        res.status(200).json(savedPlayer);


    } catch (error) {

        res.status(500).json({error: "Internal Server error." });
    }
} 

// fetch controller
export const fetch = async (req, res) => {
    try {
        const players = await Player.find();
        if (players.length === 0){
            return res.status(404).json({message: "players not found!"});

        }
        res.status(201).json(players);
        
    }catch(error){
        res.status(500).json({error: "Internal Server eorror."});
    }
};

// single player route - This is just me experimenting BTW
export const singlePlayer = async (req, res) => {
    try {

        const { id } = req.params;

        const player = await Player.findOne({_id:id});
        if (!player){
            return res.status(404).json({message: "players not found!"});
        }

        res.status(200).json(player)
    } catch (error) {
        res.status(500).json({error: "Internal Server eorror."});
    }
}

// update controller
export const update = async(req, res) => {
    try{
        const id = req.params.id;
        const playerExist = await Player.findOne({_id:id});

        if(!playerExist){
            return res.status(404).json({message:"player Not Found! "})
        }
        const updatePlayer = await Player.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(201).json(updatePlayer);
    }catch(error){
        res.status(500).json({error: "internal server error"})

    }
};

//delete controller
export const deletePlayer = async (req, res)=>{
    try{
        const id = req.params.id;
        const playerExist = await Player.findOne({_id:id});

        if(!playerExist){
            return res.status(404).json({message:"Player Not Found! "})
        }
        await Player.findByIdAndDelete(id);
        res.status(201).json({message:"user has been deleted successfully! "});
        
    }catch(error){
        res.status(500).json({error: "internal server error"})

    }
}