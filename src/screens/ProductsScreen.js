import { FlatList, Image, View, StyleSheet, Pressable } from "react-native";
import { useSelector,useDispatch } from "react-redux"
import { productSlice } from "../store/productSlice";

export default function ProductsScreen({navigation}) {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable onPress={()=> {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Deatils')}}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
        </View>
      )}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: "100%", aspectRatio: 1 },
  itemContainer: { width: "50%", padding: 1 },
});
