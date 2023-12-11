import { StyleSheet, View } from 'react-native';
import React, { forwardRef } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import Text from '@components/Text';

const HomeModal = forwardRef((_, ref) => {
  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={['25%', '40%']}
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} opacity={0.5} />
      )}
    >
      <View style={styles.container}>
        <Text>This is a test Modal</Text>
        <Text>This is a test Modal</Text>
        <Text>This is a test Modal</Text>
      </View>
    </BottomSheetModal>
  );
});

export default HomeModal;

HomeModal.displayName = 'HomeModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
