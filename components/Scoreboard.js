import React, { useEffect, useState } from "react";
import { Text, View, Pressable, Button, ScrollView } from "react-native";
import { SCOREBOARD_KEY } from "../constants/Game";
import styles from '../styles/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import Footer from './Footer';
import { DataTable, DataTableHeaderProps} from 'react-native-paper';


export default Scoreboard = ({navigation}) => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        getScoreBoardData();
      });
      return unsubscribe;
    }, [navigation])
    

    const getScoreBoardData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
            if(jsonValue !== null) {
                let tmpScores = JSON.parse(jsonValue);
                tmpScores.sort((a, b) => parseFloat(b.points) - parseFloat(a.points)); // Sort by descending score
                setScores(tmpScores);
            }
        }
        catch (error) {
            console.log('Read error: ' + error.message)
        }
    }

    // const clearScoreboard = async () => {
    //     try {
    //       await AsyncStorage.removeItem(SCOREBOARD_KEY);
          
    //     } catch(e) {
    //       console.log(e.message)
    //     }
      
    //     console.log('Done.')
    //   }
    
    return (
        <ScrollView>
            <Header />
            <Text style={styles.scoretext}>Top 10 scores</Text>
            
            <DataTable >
                <DataTable.Header>
                <DataTable.Title>Player</DataTable.Title>
                <DataTable.Title numeric>Date</DataTable.Title>
                <DataTable.Title numeric>Time</DataTable.Title>
                <DataTable.Title numeric>Score</DataTable.Title>
                </DataTable.Header>

                {scores.slice(0,10).map((player, i) => (
                    <DataTable.Row key={i} >
                    <DataTable.Cell >{i+1}. {player.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{player.date}</DataTable.Cell>
                    <DataTable.Cell numeric>{player.time}</DataTable.Cell>
                    <DataTable.Cell numeric>{player.points}</DataTable.Cell>
                    </DataTable.Row>
                ))}
                
            </DataTable>
            
            <Footer />
        </ScrollView>
    )
}