import React, { Component } from 'react';
import { Stylesheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
Import { Header } from 'react-native-elements';
export default class HomeScreen extends Component{

render(){
<View style={styles.detailsContainer}>
    <Text style={styles.detailsTitle}>
        Word :{" "}
    </Text>
    <Text style={{fontSize:10 }}>
        {this.state.word}
    </Text>
</View>
<View style={styles.detailsContainer}>
    <Text style={styles.detailsTitle}>
        Type :{" "}
    </Text>
    <Text style={{fontSize:10 }}>
        {this.state.LexicalCategory}
    </Text>
</View>
<View style={{flexDirection: 'row',flexWrap: 'wrap'}}>
    <Text style={styles.detailsTitle}>
        Definition :{" "}
    </Text>
    <Text style={{fontSize:10 }}>
        {this.state.definition}
    </Text>
</View>

<View style={styles.outputContainer}>
    <Text styles={{fontSize:20}}>
        (
        this.state.isSearchPressed &&this.state.word === "Loading..."
        ?this.state.word
        :""
        )
    </Text>
 {
    this.state.word !=="Loading..."?
    (
        <View style={{justifyContent:'center'.marginLeft:10}}>
        <Text style={styles.detailsTitle}>
            Word:{""}
            </Text>   
            <Text style={{fontSize:18}}>
                {this.state.word}
                </Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTiltle}>
                        TYpe:{""}
                        </Text>
                        <Text style={{fonSize:18}}>
                            </Text> 
                            </View
    )
 }
</View>
}
<TextInput 
style={stykes.inputBox}
onChangeText={text => {
    this.setState({
        text: text,
        isSearchPressed: false,
        word : "Loading...",
        lexicalCategory :'',
        examples : [],
        defination : ""
    });
}}
value={this.state.text}
/>

<TouchableOpacity
style={StyleSheet.serchButton}
onPress={ () => {
    this.setState({ isSearchPressed: true });
    this.getWord(this.state.text)
}}?

getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
    //console.log(url)
    return fetch(url)
    .then((data)=>{
        if(data.status===200)
        {
            return data.json()
        }
        else{
            return null
        }
    })
    .then((response)=>{
        //console.log(response)

        var responseObject = response 
        //var word = responseObject.word
        //var lexicalCatergory = responseObject.results[0].lexicalEntries[0].lexicalCategory.text
        if(responseObject)
        {
            var wordData = responseObject.definitions[0]
            //console.log(responseObject.definitions[0])
            var definition=wordData.description
            var lexicalCategory=wordData.wordtype
            //console.log(lexicalCategory)
            this.setState({
                "word" : this.state.text,
                "definition" :"Not Found",
                "lexicalCategory": lexicalCategory
            })
        }
        else
        {
            this.setState({
                "word" : this.state.text,
                "definition" :"Not Found",

            })
        }
    })
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBoxContainer: {
        flex:0.3,
        alignItems:'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '80%',
        alignSelf: 'center',
        height:40,
    }
});