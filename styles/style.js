import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    //marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#14cc58',
    flexDirection: 'row',
  },
  footer: {
    backgroundColor: '#14cc58',
    flexDirection: 'row',
    
  },
  bottomtab: {
    marginTop: 20,
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 15,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    marginLeft: 70,
    marginRight: 70,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  throwbutton: {
    width: 150,
  },
  resetbutton: {
    width: 150, 
    marginTop: 30,
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  points: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'center'
  }, 
  dicepoints: {
    flexDirection: 'row', 
    width: 280,
    alignContent: 'center'
  }, 
  textInput: {
    height: 40,
    padding: 10,
    backgroundColor: 'white',
    marginLeft: 70,
    marginRight: 70,
    borderRadius: 5
  }, 
  text: {
    fontSize: 20,
    marginBottom: 5
  },
  player: {
    marginTop: 15
  },
  scoreboard: {
    backgroundColor: '#b3ffad',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: "#FF6B6B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    elevation: 5,
  },
  scoretext: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center'
  },
  datatable: {
    marginLeft: 0
  }
  
});