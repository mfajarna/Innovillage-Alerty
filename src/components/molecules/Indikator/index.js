import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ICCurahujan,
  ICKelembapantanah,
  ICKemiringan,
  ICPergeseran,
} from '../../../assets/icon';

const Indikator = ({type, nilai}) => {
  const Icon = () => {
    if (type === 'Curah Hujan') {
      return <ICCurahujan style={styles.icon} />;
    }
    if (type === 'Kelembapan Tanah') {
      return <ICKelembapantanah style={styles.icon} />;
    }
    if (type === 'Kemiringan') {
      return <ICKemiringan style={styles.icon} />;
    }
    if (type === 'Pergeseran Tanah') {
      return <ICPergeseran style={styles.icon} />;
    }
    return <ICCurahujan style={styles.icon} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <View style={styles.output}>
        <Icon />
        <Text style={styles.nilai}>Nilai : </Text>
        <Text style={styles.textOutput}>{nilai} </Text>
      </View>
    </View>
  );
};

export default Indikator;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: '110%',
    backgroundColor: '#CE6262',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    textAlign: 'center',
    color: '#FFFF',
  },
  icon: {marginTop: 10},
  output: {
    flexDirection: 'row',
  },
  nilai: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#FFFF',
    marginLeft: 10,
    marginTop: 15,
  },
  textOutput: {
    marginLeft: 3,
    marginTop: 14.4,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#FFFF',
  },
});
