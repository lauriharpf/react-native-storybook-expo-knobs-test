import React from 'react';
import { View, Text } from 'react-native';

export default ({
  fruit,
  birthday,
}) => {
  const intro = `My favorite fruit is ${fruit}.`;
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <View style={{
      borderWidth: 3,
      borderColor: '#ff00ff',
      padding: 10,
    }}>
      <Text>{intro}</Text>
      <Text>My birthday is: {new Date(birthday).toLocaleDateString('en-US', dateOptions)}</Text>
    </View>
  );
};