import {View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import demoData from '../../../demoData/demoData.json';
import Card from '../../components/Card/Card';
import {useTheme} from '@react-navigation/native';
import {dashboardStyle} from './dashboard.style';
const Lists = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const memorizeList = useCallback(({item}) => <Card item={item} />, []);
  const renderEmptyComponent = () => (
    <View style={styles.emptyListCont}>
      <Text style={styles.emptyText}>No Lists available</Text>
    </View>
  );
  return (
    <>
      <FlatList
        data={demoData?.items}
        keyExtractor={(_, i) => i}
        renderItem={memorizeList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrap}
        initialNumToRender={4}
        windowSize={10}
        ListEmptyComponent={renderEmptyComponent}
      />
    </>
  );
};

export default Lists;
