import React,{useState,useEffect} from 'react'

export default function UrbanList() {
    const [urbanItem, setUrbanItem] = useState({list:[]});

    const [searchWord, setSearchWord] = useState('');

    const [i, setI] = useState(0)

    function search (e){
        const search = e.target.value;
        setSearchWord(search)
    }

    function getDefinition(){
        fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchWord}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5c3c04ba90msh50ee0499e3f8b4fp1d1c87jsncf5e46ba025c",
                "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
            }
        }).then(response => {
            return response.json()
        }).then(function(r){
            setUrbanItem(r)
        })
        .catch(err => {
            console.error(err);
        });

    }


    console.log(i)

    function nextdefinition(){
        setI(i +1)
    }
  


// Useeffect just for fun

    useEffect(function(){
        console.log('Useeffect gerist bara einu sinni')

    },[])

        console.log(urbanItem)
        // return(!urbanItem?<div>Waiting for data.....</div>:



        return(
            !urbanItem.list.length?
            
            <div>
                <h2>Urban Word Dictionary</h2>
                <p>Search for a word</p>
                <input onChange={search}></input>
                <button onClick={getDefinition}> search</button> 
                </div>:
            <div>

                <h2>Urban Word Dictionary</h2>
                <p>Search for a word</p>
                <input onChange={search}></input>
                <button onClick={getDefinition}> search</button> 

                <h2>{urbanItem.list[i].word}</h2>


                <div>
                    <button onClick={nextdefinition}>next defintion</button>
                    <p>Definition: {urbanItem.list[i].definition}</p>
                    Link:<a href = {urbanItem.list[i].permalink} >{urbanItem.list[i].permalink}</a>
                    <p>Example: {urbanItem.list[i].example}</p>

                    {urbanItem.list[i].sound_urls&&
                    urbanItem.list[i].sound_urls.map(function(sound){
                        return(
                            <>
                            Sound:<audio controls  src={sound}></audio>
                            </>)
                    })}
                    
                    
                </div>
                
            
    
            </div>

        )
            
    
}
