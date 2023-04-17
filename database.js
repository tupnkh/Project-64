import dictionary from '../database';

getWord=(text)=>{
var text = text.toLowerCase()
try{
var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]
this.setState({
    "word" : word,
    "lexicalCategory" : lexicalCategory,
    "definition" : definition
})
}
catch(err){
    alert("Sorry This word is not available for now")
    this.setState({
        'text':'',
        'isSearchPressed':false
    })
}
}