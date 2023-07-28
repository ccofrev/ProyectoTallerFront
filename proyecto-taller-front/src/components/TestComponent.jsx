import React, { useState, useEffect } from 'react'
import TrendingApi from '../api/TrendingApi';
import BingApi from '../api/BingApi';


function TestComponent() {
    const [trendingData, setTrendingData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        const bingData = []
        const fetchData = async () => {
          try {
            // Obtener datos de la primera API (trends)
            // const twitterData = await TrendingApi();
            TrendingApi().then(async (twitterData)=>{
                setTrendingData(twitterData)
                twitterData.forEach((tt, index)=>{
                    setTimeout(() => {
                        BingApi(tt['name']).then((res)=>{
                            // console.log("twiterdata", res.value)
                            bingData.push(res.value)
                        })
                    }, 1000 * index);
                })
            }).then(() => {
                console.log(bingData[0])
                setSearchData(bingData[0]);
            })

        } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
        fetchData();
      }, []);
      
    return (
        <div>
            {/* {trendingData.map((tt,index) => (
                <p key={index}>
                    <strong>{tt['name']}</strong> &nbsp; <strong>{tt['Tweet Count']}</strong>
                </p>
            ))} */}

            {searchData ? 
                searchData.map((resultado,index) => (
                    <p key={index}>
                        <strong>{resultado['name']}:</strong> {resultado['description']} 
                    </p>
                )): <img src={'../assets/img/loading.gif'} alt="Loading..."/>
            }
        </div>
    );
}
export default TestComponent;
