import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>402,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>10,00 US$</Text>
    </View>
  </View>
);
export default function ShoppingCart() {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonTxt}>Checkout</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 5,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  textBold: {
    fontWeight: "500",
    fontSize: 16,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    bottom: 30,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
  },
  buttonTxt: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
