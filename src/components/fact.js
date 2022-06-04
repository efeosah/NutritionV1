import React, { useState, useEffect } from "react";

const tags = {
    old: "old_api_id",
    itemID: "item_id",
    itemName: "item_name", //->
    legLocID: "leg_loc_id",
    brandID: "brand_id",
    brandName: "brand_name", //->
    itemDescription: "item_description",
    lastUpdate: "updated_at",
    itemIngredients: "nf_ingredient_statement", //->
    itemWaterGrams: "nf_water_grams",
    itemCalories: "nf_calories", //->
    itemCaloriesFromFat: "nf_calories_from_fat", //->
    itemTotalFat: "nf_total_fat", //->
    itemSaturatedFat: "nf_saturated_fat", //->
    itemTransFattyAcid: "nf_trans_fatty_acid", //->
    itemPolyunsaturatedFat: "nf_polyunsaturated_fat",
    itemMonounsaturatedFat: "nf_monounsaturated_fat",
    itemCholesterol: "nf_cholesterol", //->
    itemSodium: "nf_sodium", //->
    itemTotalCarbs: "nf_total_carbohydrate", //->
    itemDietaryFiber: "nf_dietary_fiber", //->
    itemSugars: "nf_sugars",
    itemProtein: "nf_protein",
    itemVitaminA: "nf_vitamin_a_dv",
    itemVitaminC: "nf_vitamin_c_dv",
    itemCalcium: "nf_calcium_dv",
    itemIron: "nf_iron_dv",
    itemRefuse: "nf_refuse_pct",
    itemServingPerContainer: "nf_servings_per_container",
    itemServingSizeQuantity: "nf_serving_size_qty",
    itemServingSizeUnit: "nf_serving_size_unit",
    itemServingWeightGram: "nf_serving_weight_grams",
    itemAllergenMilk: "allergen_contains_milk",
    itemallergenEgg: "allergen_contains_eggs",
    itemAllergenFish: "allergen_contains_fish",
    itemAllergenShellFish: "allergen_contains_shellfish",
    itemAllergenTreeNuts: "allergen_contains_tree_nuts",
    itemAllergenPeanuts: "allergen_contains_peanuts",
    itemAllergenWheat: "allergen_contains_wheat",
    itemAllergenSoyBeans: "allergen_contains_soybeans",
    itemAllergenGluten: "allergen_contains_gluten",
    itemUSDA: "usda_fields",
    image : "images_front_full_url",
    itemAddedSugars : "nf_added_sugars",

};


const _field = [

    `${tags.itemName}`,
    `%2C${tags.itemID}`,
    `%2C${tags.brandName}`,
    `%2C${tags.itemCalories}`,
    `%2C${tags.itemTotalFat}`,
    `%2C${tags.itemServingPerContainer}`,
    `%2C${tags.itemServingSizeQuantity}`,
    `%2C${tags.itemProtein}`,
    `%2C${tags.itemVitaminA}`,
    `%2C${tags.itemVitaminC}`,
    `%2C${tags.itemTotalCarbs}`,
    `%2C${tags.itemCholesterol}`,
    `%2C${tags.itemSodium}`,
    `%2C${tags.itemSaturatedFat}`,
    `%2C${tags.itemTransFattyAcid}`,
    `%2C${tags.itemServingWeightGram}`,
    `%2C${tags.itemServingSizeUnit}`,
    `%2C${tags.itemIron}`,
    `%2C${tags.image}`,
    `%2C${tags.itemAddedSugars}`,
    `%2C${tags.itemDietaryFiber}`,
    `%2C${tags.itemSugars}`,
    `%2C${tags.itemCalcium}`




]

export const Fact = (data) => {
    const [facts, setFacts] = useState([]);
    const [minQuery, setminQuery] = useState(0);
    const [maxQuery, setmaxQuery] = useState(6);
    const [count, setCount] = useState(0);


    const item = data.item;
    
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
            "X-RapidAPI-Key":
                "da40a4baf8mshf0523501199b7bep16d4fejsnf2b4505fd6cc",
        },
    };

    


    const resultsCount = `results=${minQuery}:${maxQuery}`;

    const url = `https://nutritionix-api.p.rapidapi.com/v1_1/search/${item}?${resultsCount}&fields=${_field.join('')}`;

    useEffect(() => {
        resetQuery();
        getFacts();
        
    }, [data.item]);

    useEffect(() => {
        getFacts();
        
        
    }, [minQuery]);

    useEffect(() => {
        if(facts.length > 0){
            data.result(true)
        }
        else{
            data.result(false)

        }
        
    }, [facts]);

    const getFacts = () => {
        fetch(url, options)
            .then((query) => {
                if (!query.ok) {
                    throw Error(query.statusText);
                }
                // console.log(query.json())
                return query.json();
            })
            .then((data) => {
                
                setCount(data.total_hits)
                return data.hits})
            .then((hits) =>
                hits.reduce((acc, fact, index) => {
                    let temp = {
                        Item: `${fact.fields.item_name}`,
                        Brand: `${fact.fields.brand_name}`,
                        Calories: `${fact.fields.nf_calories}`,
                        CaloriesF : `${fact.fields.nf_calories_from_fat}`,
                        ServingQ: `${fact.fields.nf_serving_size_qty}`,
                        ServingS: `${fact.fields.nf_serving_size_unit}`,
                        TotalF : `${fact.fields.nf_total_fat}`,
                        Protein : `${fact.fields.nf_protein}`,
                        Iron : `${fact.fields.nf_iron_dv}`,
                        VitaminA : `${fact.fields.nf_vitamin_a_dv}`,
                        VitaminC : `${fact.fields.nf_vitamin_c_dv}`,
                        SaturatedF : `${fact.fields.nf_saturated_fat}`,
                        TransF : `${fact.fields.nf_trans_fatty_acid}`,
                        Cholesterol : `${fact.fields.nf_cholesterol}`,
                        Carbs: `${fact.fields.nf_total_carbohydrate}`,
                        Image : `${fact.fields.images_front_full_url}`,
                        SugarsA : `${fact.fields.nf_added_sugars}`,
                        Sodium : `${fact.fields.nf_sodium}`,
                        DietaryF : `${fact.fields.nf_dietary_fiber}`,
                        Sugar : `${fact.fields.nf_sugars}`,
                        Calcium : `${fact.fields.nf_calcium_dv}`


                        // Potassium : `${fact.fields.nf_potassium}`

                    };
                    acc[index] = temp;
                    return acc;
                }, [])
            )
            .then((final) => setFacts(final))
            // .then(() => console.log(facts)) 
            .catch((err) => console.error("error : ", err));

            
    };
   
    const isPageMiddle = () => {
        return maxQuery < count
    }

    const isPageStart = () => { 
        return minQuery >= 6
    }

    const updateQuery = (inc) => {
        setminQuery(minQuery+inc)
        setmaxQuery(maxQuery+inc)
        data.select({})
    }

    const resetQuery = () => {
        setminQuery(0)
        setmaxQuery(6)
        data.select({})
    }


    const clickList = (e) => {
        console.log(e.target.style)
        // e.target.style.background = "grey";
    }


    return (
        <>
            {isPageMiddle() && <button type="button" onClick={() => {updateQuery(6)}}>Next</button>}
            {isPageStart() && <button type="button" onClick={() => {updateQuery(-6)}}>Last</button>}
            <ul className="todolist">
                {facts.map((f, index) => (
                    <li key={index}>
                        <span onClick={() => data.select(f)}>{f.Item} - {f.Brand}</span>
                    </li>
                ))}

            </ul>
        </>
    );
};


//Servings per container
//servnig size
//amount per serving
//calories
//daily value
//total fat -> saturated fat, Trans fat
//cholesterol 
// sodium
//Total carbs -> dietary fiber, total sugars
//Protein
//dash----->
//Vitamin D
//calcium
//iron
//potassium 

