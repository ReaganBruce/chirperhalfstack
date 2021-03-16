
import * as express from 'express';
import chirpStore from '../utils/chirpstore'
const router = express.Router();



//GET http://localhost:3000/api/chirps/id/
router.get('/:id', (req, res) => {
    const getSingleChirpId = req.params.id
    const chirp = chirpStore.GetChirp(getSingleChirpId)
    res.json(chirp);
});

//GET http://localhost:3000/api/chirps/
router.get('/', (req, res) => {
    const data = chirpStore.GetChirps();
    const convertedChirps = Object.keys(data).map(key => {
        return { 
            id: key,
            user: data[key].user,
            chirp: data[key].chirp
        }
    })
    convertedChirps.pop();
    res.json(convertedChirps);
});

//POST http://localhost:3000/api/chirps/
router.post('/', (req, res) => {
    const newChirp = req.body
    const createNewChirp = chirpStore.CreateChirp(newChirp);
    res.json(createNewChirp);
})

//PUT http://localhost:3000/api/chirps/id/
router.put('/:id', (req, res) => {
    const updatedChirpId = req.params.id;
    const updatedChirpBody = req.body;
    chirpStore.UpdateChirp( updatedChirpId, updatedChirpBody )
    res.json({ message: `Update Chirp ${updatedChirpId}`});
})

//Delete http://localhost:3000/api/chirps/id/
router.delete('/:id', (req, res) => {
    const deletedChirp = req.params.id;
    chirpStore.DeleteChirp(deletedChirp);
    res.json( { message: `You deleted this chirp: ${deletedChirp}`});
})


export default router;

// const convertedChirps = Object.keys(data).map((key) => {
//     return {
//         id: key,
//         user: data[key].user,
//         chirp: data[key].chirp
//     }
// })
// convertedChirps.pop()