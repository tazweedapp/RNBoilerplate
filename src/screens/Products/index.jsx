import { RefreshControl, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetAllProductsQuery } from '@redux/queries/productsAPI';
import { FlashList } from '@shopify/flash-list';
import ProductCard from './ProductCard';
import { useTheme } from '@react-navigation/native';

const LIMIT = 10;

const Products = () => {
  const { colors } = useTheme();
  const [skip, setSkip] = useState(0);
  const { data, isFetching, refetch } = useGetAllProductsQuery({
    limit: LIMIT,
    skip,
    select: 'title,price',
  });

  const handleEndReached = useCallback(() => {
    if (!isFetching) {
      setSkip((prev) => prev + LIMIT);
    }
  }, [isFetching]);

  const renderItem = useCallback(({ item }) => {
    return <ProductCard title={item.title} price={item.price} id={item.id} />;
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={115}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={refetch}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
        onEndReachedThreshold={0.2}
        onEndReached={handleEndReached}
      />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
