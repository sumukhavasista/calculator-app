import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayedNumber, setDisplayedNumber] = useState('');

  const handleNumberPress = (number) => {
    setDisplayedNumber(displayedNumber + number);
  };

  const handleClear = () => {
    setDisplayedNumber('');
  };

  const handleDelete = () => {
    setDisplayedNumber(displayedNumber.slice(0, -1));
  };

  const handleResult = () => {
    try {
      const result = eval(displayedNumber);
      setDisplayedNumber(result.toString());
    } catch (error) {
      setDisplayedNumber('Error');
    }
  };


  return (
    <View style={styles.body}>

      <Text style={styles.display}>{displayedNumber}</Text>

      

      
  
      <View style={styles.row}>

      <TouchableOpacity style={styles.back} onPress={handleClear}>
          <Text style={styles.backText}>CE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.op} onPress={() => handleNumberPress('( )')}>
          <Text style={styles.opText}>( )</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.op} onPress={() => handleNumberPress('/')}>
          <Text style={styles.opText}>/</Text>
        </TouchableOpacity>

      </View>
      {/* Additional rows and buttons */}
      <View style={styles.row}>

      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
   

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.op} onPress={() => handleNumberPress('*')}>
          <Text style={styles.opText}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
   

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.op} onPress={() => handleNumberPress('-')}>
          <Text style={styles.opText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
   

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.op} onPress={() => handleNumberPress('+')}>
          <Text style={styles.opText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>

      <TouchableOpacity style={styles.stop} onPress={() => handleNumberPress('.')}>
          <Text style={styles.stopText}>.</Text>
        </TouchableOpacity>
      
      

        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.equal} onPress={() => handleResult('=')}>
          <Text style={styles.equalText}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clear} onPress={handleDelete}>
          <Text style={styles.clearText}>DEL</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>

    

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    padding: 20,
  },
  heading: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 30, 
  },
  display: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 250, // Adjusted margin
    paddingHorizontal: 20, // Added horizontal padding
    width: '100%', // Set width to 100% to prevent movement
    height: '3%',
    textAlign: 'right', // Align text to the right
},

  row: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 33,
    borderRadius: 30,
    marginHorizontal: 5,
    justifyContent: 'center', 
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6, 
    elevation: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  
  clear: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: 3,
    justifyContent: 'flex-end',
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6, 
    elevation: 5,
    
  },

  clearText:{
      textAlign: 'center',
      color: 'red',
      fontSize: 27,
      fontWeight: 'bold',
  },

  back: {
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 26,
    borderRadius: 30,
    marginHorizontal: 3,
    justifyContent: 'auto', 
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6, 
    elevation: 5,
  },

  backText: {
    textAlign: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
  },

  op: {
    backgroundColor: 'yellow',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 3,
    justifyContent: 'flex-end', 
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6, 
    elevation: 5,
  },

  opText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  equal: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginHorizontal: 3,
    justifyContent: 'flex-end', 
    shadowColor: 'blue',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6, 
    elevation: 5,
  },

  equalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  stop: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginHorizontal: 5,
    justifyContent: 'center', 
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6, 
    elevation: 5,
  },

  stopText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  layout:{
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 1,
  }
});
