import React, {useState, useEffect} from 'react'



export const Display = (data) => {

    const [fact, setFact] = useState(data.item);

    useEffect(() => {
        setFact(data.item)
        
    }, [data.item]);

    if(Object.keys(fact).length === 0){
        return "Please make an item selection from the list"
    }

    

    // console.log(fact)
    return (
        <>
            
            <div id="nutritionfacts">
                <table className='main' cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td align="center" className="header">Item : {fact.Item}<br/>Brand : {fact.Brand}</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="serving">Per <span class="highlighted">{fact.ServingQ ? fact.ServingQ : '0'} {fact.ServingS}</span> Serving Size</div>
                            </td>
                        </tr>
                        <tr id='bar'>
                            <td bgcolor="#000000"></td>
                        </tr>
                        <tr>
                            <td style={{fontsize : "7pt"}}><div class="line">Amount Per Serving</div></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line">
                                    <div class="label">Calories <div class="weight">{fact.Calories === "undefined" ? '-' : fact.Calories }</div></div><div style={{paddingtop: "1px", float: "right"}} class="labellight">Calories from Fat <div class="weight">{fact.CaloriesF === "undefined" ? '-' : fact.CaloriesF }</div></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line"><div class="dvlabel">% Daily Value <sup>*</sup></div></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line">
                                <div class="label">Total Fat <div class="weight">{fact.TotalF}g</div></div>
                                {/* <div class="dv">10%</div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="indent">
                                <div class="line">
                                <div class="labellight">Saturated Fat <div class="weight">{fact.SaturatedF}g</div></div>
                                {/* <div class="dv">17%</div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="indent">
                                <div class="line">
                                <div class="labellight"><i>Trans</i> Fat <div class="weight">{fact.TransF}g</div></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line">
                                <div class="label">Cholesterol <div class="weight">{fact.Cholesterol}mg</div></div>
                                {/* <div class="dv">7%</div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line">
                                <div class="label">Sodium <div class="weight">{fact.Sodium }mg</div></div>
                                {/* <div class="dv">26%</div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line">
                                <div class="label">Total Carbohydrates <div class="weight">{fact.Carbs}g</div></div>
                                {/* <div class="dv">11%</div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="indent">
                                <div class="line">
                                <div class="labellight">Dietary Fiber <div class="weight">{fact.DietaryF}g</div></div>
                                {/* <div class="dv">21%</div> */}
                            </div></td>
                        </tr>
                        <tr>
                            <td class="indent">
                                <div class="line">
                                <div class="labellight">Sugars <div class="weight">{fact.Sugar}g</div></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="line">
                                <div class="label">Protein <div class="weight">{fact.Protein}g</div>
                                </div>
                            </div></td>
                        </tr>
                        <tr id='bar'>
                            <td bgcolor="#000000"></td>
                        </tr>
                        <tr>
                        <td>
                            <table cellSpacing="0" cellPadding="0" border="0" class="vitamins">
                            <tbody>
                            <tr>
                                <td>Calcium &nbsp;&nbsp; {fact.Calcium}%</td>
                            </tr>
                            <tr>
                                <td>Iron &nbsp;&nbsp; {fact.Iron}%</td>
                            </tr>
                            <tr>
                                <td>Vitamin C &nbsp;&nbsp; {fact.VitaminC}%</td>
                            </tr>
                            <tr>
                                <td>Vitamin A &nbsp;&nbsp; {fact.VitaminA}%</td>
                            </tr>
                                                    
                            </tbody></table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="line">
                            <div class="labellight">* Based on a regular 2000 calorie diet
                            <br />
                            <br />
                            <i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                            </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )


}