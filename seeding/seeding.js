const pool = require('../db_config/db_config.js')

let films = []

// films.push({
//     title: `Title Dummy ${i}`,
//     description: `Description Dummy ${i}`,
//     release_year: 2000 + i,
//     language_id: i,
//     rental_duration: i,
//     rental_rate: `${(i*0.1).toFixed(1)}`,
//     length: `${i*10}`,
//     replacement_cost: `${(i*0.01).toFixed(2)}`,
//     rating: `RATING-${i}`,
//     special_features: [`Feature ${i}`],
//     fulltext: `FULLTEXT ${i}`
// })

async function seed(){
    try{
        for (let i = 0; i < 5; i++) {
            await pool.query(`
                INSERT INTO film (title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, special_features)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
                [
                    `Title Dummy ${i}`,
                    `Description Dummy ${i}`,
                    2000 + i,
                    1,
                    i,
                    `${(i * 0.1).toFixed(1)}`,
                    `${i * 10}`,
                    `${(i * 0.01).toFixed(2)}`,
                    `PG`,
                    [`Feature ${i}`]
                    
                ]);
        
            console.log(`dummy: ${i}`);
        }
    }
    catch(error){
        console.log("Error: ", error);
    }
}

seed();



