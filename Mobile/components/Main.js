import React, { useState, Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Hamburguer from "../assets/hamburguer.svg";
import NeutralSub from "../assets/neutralsubtraction.svg";
import Plus from "../assets/plus.svg";
import { RadioButton } from "react-native-paper";

export default function Main() {
  const [state, setState] = useState(0);
  const [queijoCheddar, setQueijoCheddar] = useState(0);
  const [crispy, setCrispy] = useState(0);
  const [molhoCheddar, setMolhoCheddar] = useState(0);
  const [picanha, setPicanha] = useState(0);
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={styles.container}>
      <Hamburguer styles={styles.image} width="400" height="180" />
      <View style={styles.DivText}>
        <Text style={styles.h1}>Oferta picanha cheddar bacon</Text>
        <Text style={styles.p1}>
          Delicioso hambúrguer de picanha, molho de picanha, cebola crispy,
          bacon, queijo cheddar, molho cheddar e pão mix de gergelim,
          acompanhamento e bebida.
        </Text>

        <View style={styles.DivPrice}>
          <Text style={styles.p2}>R$31,99</Text>
          <Text style={styles.p3}>R$34,95</Text>
        </View>

        <View style={styles.DivIngredients}>
          <View>
            <Text style={styles.pAdd}>Adicionar Ingredientes</Text>
            <Text style={styles.pIngredient}>Até 8 ingredientes</Text>
          </View>
        </View>
        <View style={styles.DivAddIngredient}>
          <View>
            <Text style={styles.TextIngredient}>Queijo cheddar</Text>
            <Text style={styles.TextPrice}>+ R$4,99</Text>
          </View>
          <View style={styles.ButtonSubPlus}>
            <View style={styles.DivButton}>
              <NeutralSub
                onPress={
                  queijoCheddar > 0
                    ? () => setQueijoCheddar(queijoCheddar - 1)
                    : () => setQueijoCheddar(queijoCheddar)
                }
              />
              <Text>{queijoCheddar}</Text>
              <Plus onPress={() => setQueijoCheddar(queijoCheddar + 1)} />
            </View>
          </View>
        </View>
        <View style={styles.DivAddIngredient}>
          <View>
            <Text style={styles.TextIngredient}>Cebola crispy</Text>
            <Text style={styles.TextPrice}>+ R$1,50</Text>
          </View>
          <View style={styles.ButtonSubPlus}>
            <View style={styles.DivButton}>
              <NeutralSub
                onPress={
                  crispy > 0
                    ? () => setCrispy(crispy - 1)
                    : () => setCrispy(crispy)
                }
              />
              <Text>{crispy}</Text>
              <Plus onPress={() => setCrispy(crispy + 1)} />
            </View>
          </View>
        </View>
        <View style={styles.DivAddIngredient}>
          <View>
            <Text style={styles.TextIngredient}>Molho cheddar</Text>
            <Text style={styles.TextPrice}>+ R$3,50</Text>
          </View>
          <View style={styles.ButtonSubPlus}>
            <View style={styles.DivButton}>
              <NeutralSub
                onPress={
                  molhoCheddar > 0
                    ? () => setMolhoCheddar(molhoCheddar - 1)
                    : () => setMolhoCheddar(molhoCheddar)
                }
              />
              <Text>{molhoCheddar}</Text>
              <Plus onPress={() => setMolhoCheddar(molhoCheddar + 1)} />
            </View>
          </View>
        </View>
        <View style={styles.DivAddIngredient}>
          <View>
            <Text style={styles.TextIngredient}>Molho de picanha</Text>
            <Text style={styles.TextPrice}>+ R$3,50</Text>
          </View>
          <View style={styles.ButtonSubPlus}>
            <View style={styles.DivButton}>
              <NeutralSub
                onPress={
                  picanha > 0
                    ? () => setPicanha(picanha - 1)
                    : () => setPicanha(picanha)
                }
              />
              <Text>{picanha}</Text>
              <Plus onPress={() => setPicanha(picanha + 1)} />
            </View>
          </View>
        </View>
        <View style={styles.DivIngredients}>
          <View>
            <Text style={styles.pAdd}>Precisa de talher?</Text>
          </View>
        </View>

        <View>
          <View style={styles.DivRadio}>
            <Text style={styles.pRadio}>Sim</Text>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
              color={"#FEBC10"}
            />
          </View>
          <View style={styles.DivRadio}>
            <Text style={styles.pRadio}>Não</Text>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
              color={"#FEBC10"}
            />
          </View>
        </View>
      </View>
      <View style={styles.DivAddAllIngredients}>
        <View style={styles.DivButtonAdd}>
          <NeutralSub
            onPress={
              state > 0 ? () => setState(state - 1) : () => setState(state)
            }
          />
          <Text>{state}</Text>
          <Plus onPress={() => setState(state + 1)} />
        </View>
        <Button color={"#F09035"} title="Adicionar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  DivText: {
    marginLeft: 20,
  },
  DivPrice: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  DivIngredients: {
    padding: 15,
    marginTop: 50,
    backgroundColor: "#FDD70E33",
    width: "95%",
    marginBottom: 30,
  },
  DivAddIngredient: {
    marginTop: 20,
    marginLeft: 13,
    width: "92%",
    borderBottomColor: "#E8A634",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: {
    fontSize: 20,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    color: "#4E4E4E",
    paddingTop: 50,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  p1: {
    fontSize: 18,
    lineHeight: 20,
    color: "#4E4E4E",
    width: 390,
  },
  p2: {
    fontSize: 17,
    paddingTop: 9,
    lineHeight: 16,
    color: "#E49700",
    marginRight: 10,
  },
  p3: {
    fontSize: 17,
    paddingTop: 9,
    lineHeight: 16,
    color: "#4E4E4E",
    textDecorationLine: "line-through",
  },
  pAdd: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 5,
    color: "#4E4E4E",
  },
  TextIngredient: {
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 40,
    color: "#4E4E4E",
  },
  TextPrice: {
    fontSize: 17,
    paddingBottom: 20,
    color: "#F09035",
  },
  pIngredient: {
    color: "#E49700",
  },
  ButtonSubPlus: {
    width: "30%",
    borderColor: "#F09035",
    borderWidth: 1,
    borderRadius: 4,
  },
  DivButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 6,
  },
  ButtonAdd: {
    backgroundColor: "#F09035",
  },
  DivAddAllIngredients: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    marginBottom: 25,
  },
  DivButtonAdd: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-around",
    borderColor: "#F09035",
    borderWidth: 1,
    borderRadius: 4,
  },
  DivRadio: {
    display: "flex",
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pRadio: {
    paddingLeft: 5,
    fontSize: 14,
    lineHeight: 16,
    color: "#4E4E4E",
  },
});
