import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Text, { TEXT_ENUMS } from '@components/Text';

const ProductCard = ({ id, title, price }) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.card, shadowColor: colors.text },
      ]}
    >
      <Text type={TEXT_ENUMS.H2} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.price}>${price}</Text>
      <Text>ID: {id}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginBottom: 8,
  },
  price: {
    marginBottom: 8,
  },
});
