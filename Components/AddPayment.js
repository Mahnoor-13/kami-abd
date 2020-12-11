import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import { Calendar } from "react-native-calendars";
import DynamicallySelectedPicker from "../CustomComponents/CustomTimeSelector/index";
import { NeuView } from "react-native-neu-element";

const { height } = Dimensions.get("screen");

export default function App() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [periodicity, setPeriodocity] = useState("Monthly");
  const [remindedCollapsed, setRemindedCollapsed] = useState(true);
  const [reminder, setReminder] = useState("Notifications");
  const [categoryCollapsed, setCategoryCollapsed] = useState(true);
  const [category, setCategory] = useState("Bank");
  const [text, setText] = useState("");
  const [isRefresh, setIsRefresh] = useState(false);

  const [currentTime, setCurrentTime] = useState("");
  const [hrs, setHrs] = useState("");
  const [mins, stmMins] = useState("");

  useEffect(() => {
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    // let sec = new Date().getSeconds();
    stmMins(min)
    setHrs(hours)

    // setCurrentTime(hours + ":" + min );
  }, []);

  const [selectedDatesObj, setSelectedDatesObj] = useState({
    "2020-12-03": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#fa3a8b",
          borderRadius: 10,
        },
        text: {
          color: "#fa3a8b",
          fontWeight: "bold",
        },
      },
    },
    "2020-12-25": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#fa3a8b",
          borderRadius: 10,
        },
        text: {
          color: "#fa3a8b",
          fontWeight: "bold",
        },
      },
    },

    "2020-12-17": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#387CF7",
          borderRadius: 10,
        },
        text: {
          color: "#387CF7",
          fontWeight: "bold",
        },
      },
    },

    "2020-12-07": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#7830CE",
          borderRadius: 10,
        },
        text: {
          color: "#7830CE",
          fontWeight: "bold",
        },
      },
    },

    "2020-12-11": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#7830CE",
          borderRadius: 10,
        },
        text: {
          color: "#7830CE",
          fontWeight: "bold",
        },
      },
    },

    "2020-12-31": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#7830CE",
          borderRadius: 10,
        },
        text: {
          color: "#7830CE",
          fontWeight: "bold",
        },
      },
    },

    "2020-12-23": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#21D0B3",
          borderRadius: 10,
        },
        text: {
          color: "#21D0B3",
          fontWeight: "bold",
        },
      },
    },

    "2020-12-21": {
      customStyles: {
        container: {
          borderWidth: 1,
          borderColor: "#21D0B3",
          borderRadius: 10,
        },
        text: {
          color: "#21D0B3",
          fontWeight: "bold",
        },
      },
    },
  });

  useEffect(() => {
    showTimepicker();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const addSelectedDate = (date) => {
    setIsRefresh(true);

    if (selectedDatesObj[date]) {
      let obj = {
        ...selectedDatesObj,
        [date]: null,
      };
      setSelectedDatesObj(obj);
    } else {
      let colors = ["#fa3a8b", "#21D0B3", "#387CF7", "#7830CE"];
      let color = colors[Math.floor(Math.random() * 4)];
      let obj = {
        ...selectedDatesObj,
        [date]: {
          customStyles: {
            container: {
              borderWidth: 0.5,
              borderColor: color,
              borderRadius: 10,
            },
            text: {
              color: color,
              fontWeight: "bold",
            },
          },
        },
      };
      setSelectedDatesObj(obj);
    }
    setIsRefresh(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView style={styles.mainscrollview} nestedScrollEnabled={true}>
          <View style={styles.getStarted}>
            <View style={styles.backProfile}>
              <View style={styles.back}>
                <View style={styles.backArrow}>
                  <Entypo name="chevron-thin-left" size={24} color="white" />
                </View>
                <View style={styles.Addpayment}>
                  <Text style={styles.textPayment}>Add Payment</Text>
                  <Text style={styles.reminder}>Reminder</Text>
                </View>
              </View>
              <View>
                <View
                  style={styles.ProfilePic}
                  onClick={() => this.props.history.push("notification")}
                >
                  <View>
                    <Image
                      style={styles.profileimg}
                      source={require("../assets/profile.png")}
                    />
                  </View>

                  <View style={styles.Number}>
                    <Text style={{ color: "white", fontSize: 13 }}>1</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomBackground}>
              <View style={styles.background}>
                <NeuView
                  width={342}
                  height={100}
                  color={"#eef2f9"}
                  borderRadius={16}
                  containerStyle={{
                    //Any style
                    //   flexDirection: "row",
                    padding: 15,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#282C31",
                    width: "100%",

                    // padding: 13,
                    // top: 15,
                  }}
                  normal
                >
                  <View style={styles.walletVisa}>
                    <Image source={require("../assets/wallet.png")} />

                    <View style={{ left: 15, bottom: 3 }}>
                      <Text style={styles.visasilver}>
                        Visa Silver Credit Card
                      </Text>
                      <Text style={styles.paymentsubtext}>Payment</Text>
                    </View>
                  </View>
                  <View style={styles.UpdateCreditCard}>
                    <Image
                      source={require("../assets/update_credit_card.png")}
                    />
                  </View>
                </NeuView>
              </View>

              {/* <View style={styles.background}>
              <View style={styles.background2}>
                <View style={styles.walletVisa}>
                  <Image source={require("../assets/wallet.png")} />

                  <View style={{ left: 15, bottom: 3 }}>
                    <Text style={styles.visasilver}>
                      Visa Silver Credit Card
                    </Text>
                    <Text style={styles.paymentsubtext}>Payment</Text>
                  </View>
                </View>
                <View style={styles.UpdateCreditCard}>
                  <Image source={require("../assets/update_credit_card.png")} />
                </View>
              </View>
            </View> */}

              <View style={styles.paymentDate}>
                <Text style={styles.selectpaymentdate}>
                  SELECT PAYMENT DATE
                </Text>

                <View>
                  <View style={{ borderBottomColor: 1 }}>
                    <Calendar
                      style={styles.calendarcolor}
                      onDayPress={(date) => addSelectedDate(date.dateString)}
                      markingType={"custom"}
                      theme={{
                        calendarBackground: "#2b2e33",
                        selectedDayTextColor: "#ffffff",
                        todayTextColor: "white",
                        dayTextColor: "white",
                        textDisabledColor: "#999B9D",
                        selectedDotColor: "#ffffff",
                        arrowColor: "white",
                        disabledArrowColor: "#d9e1e8",
                        monthTextColor: "white",
                      }}
                      markedDates={selectedDatesObj}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.backgperiodicity}>
                <View style={styles.selectDate}>
                  <Text style={styles.periodicity}>PERIODICITY</Text>
                </View>

                <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
                  <View style={styles.header}>
                    <View style={styles.backgperiodicity2}>
                      <View style={styles.walletVisa}>
                        <View style={{ left: 10 }}>
                          <Text style={styles.heading}>{periodicity}</Text>
                        </View>
                      </View>
                      <View style={styles.dropupicon}>
                        {!collapsed ? (
                          <View style={{ width: 25, height: 25 }}>
                            <Feather
                              name="chevron-up"
                              size={24}
                              color="#2b2e33"
                              style={{ left: 0.5 }}
                            />
                          </View>
                        ) : (
                          <Image
                            source={require("../assets/dropdown_button.png")}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <Collapsible
                  style={styles.collapsedstyle}
                  collapsed={collapsed}
                  align="center"
                >
                  <View style={{ fontSize: 27 }}>
                    <TouchableOpacity>
                      <Text
                        style={styles.options}
                        onPress={() => {
                          setPeriodocity("None");
                          setCollapsed(!collapsed);
                        }}
                      >
                        None
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setPeriodocity("Monthly");
                        setCollapsed(!collapsed);
                      }}
                    >
                      Monthly
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setPeriodocity("Yearly");
                        setCollapsed(!collapsed);
                      }}
                    >
                      Yearly
                    </Text>
                  </View>
                </Collapsible>

                <View style={styles.selectDate}>
                  <Text style={styles.reminder2}>
                    HOW WOULD YOU LIKE TO GET REMINDED?
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => setRemindedCollapsed(!remindedCollapsed)}
                >
                  <View style={styles.header}>
                    <View style={styles.backgperiodicity2}>
                      <View style={styles.walletVisa}>
                        <View style={{ left: 10 }}>
                          <Text style={styles.heading}>{reminder}</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 20,
                        }}
                      >
                        {!remindedCollapsed ? (
                          <View style={{ width: 25, height: 25 }}>
                            <Feather
                              name="chevron-up"
                              size={24}
                              color="#2b2e33"
                              style={{ left: 0.5 }}
                            />
                          </View>
                        ) : (
                          <Image
                            source={require("../assets/dropdown_button.png")}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <Collapsible
                  style={styles.collapsedstyle}
                  collapsed={remindedCollapsed}
                  align="center"
                >
                  <View style={{ fontSize: 27 }}>
                    <TouchableOpacity>
                      <Text
                        style={styles.options}
                        onPress={() => {
                          setReminder("Notifications");
                          setRemindedCollapsed(!remindedCollapsed);
                        }}
                      >
                        Notifications
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setReminder("E-mail");
                        setRemindedCollapsed(!remindedCollapsed);
                      }}
                    >
                      E-mail
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setReminder("SMS");
                        setRemindedCollapsed(!remindedCollapsed);
                      }}
                    >
                      SMS
                    </Text>
                  </View>
                </Collapsible>

                <View style={styles.selectDate}>
                  <Text style={styles.reminder2}>TIME</Text>
                </View>

                <View style={styles.timer}>
                  <DynamicallySelectedPicker hrs={hrs} mins={mins} currentTime={() => currentTime = false} />
                </View>
              </View>

              <View style={styles.backcategory}>
                <View style={styles.selectDate}>
                  <Text style={styles.periodicity}>CATEGORY</Text>
                </View>

                <TouchableOpacity
                  onPress={() => setCategoryCollapsed(!categoryCollapsed)}
                >
                  <View style={styles.header}>
                    <View style={styles.backgperiodicity2}>
                      <View style={styles.walletVisa}>
                        <View style={{ left: 10 }}>
                          <Text style={styles.heading}>{category}</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 20,
                          // padding: 4
                        }}
                      >
                        {!categoryCollapsed ? (
                          <View style={styles.collapsed}>
                            <AntDesign
                              name="up"
                              size={24}
                              color="black"
                              // style={{ left: 0.5 }}
                            />
                          </View>
                        ) : (
                          <Image
                            source={require("../assets/dropdown_button.png")}
                          />
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <Collapsible
                  style={styles.collapsedstyle}
                  collapsed={categoryCollapsed}
                  align="center"
                >
                  <View style={{ fontSize: 27 }}>
                    <TouchableOpacity>
                      <Text
                        style={styles.options}
                        onPress={() => {
                          setCategory("Bank");
                          setCategoryCollapsed(!categoryCollapsed);
                        }}
                      >
                        Bank
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setCategory("Loans");
                        setCategoryCollapsed(!categoryCollapsed);
                      }}
                    >
                      Loans
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setCategory("Mortgage");
                        setCategoryCollapsed(!categoryCollapsed);
                      }}
                    >
                      Mortgage
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={styles.options}
                      onPress={() => {
                        setCategory("Bills");
                        setCategoryCollapsed(!categoryCollapsed);
                      }}
                    >
                      Bills
                    </Text>
                  </View>
                </Collapsible>

                <View style={styles.selectDate}>
                  <Text style={styles.reminder2}>COMPANY</Text>
                </View>

                <View>
                  <TextInput
                    style={styles.textinput2}
                    // placeholder="Bank Of America"
                    // placeholderTextColor="white"
                    onChangeText={(text) => setText(text)}
                    defaultValue={text}
                  />
                </View>
                <View style={styles.selectDate}>
                  <Text style={styles.reminder2}>AMOUNT TO PAY</Text>
                </View>

                <View style={styles.amounttopay}>
                  <View>
                    <Text style={styles.dollaricon}>$</Text>
                  </View>

                  <View style={styles.textinput} />

                  <View>
                    <TextInput
                      style={styles.textinput2}
                      style={{
                        left: 20,
                        // fontWeight: "500",
                        fontFamily: "Metropolisbold",

                        color: "white",
                        width: 300,
                      }}
                      // placeholder="Amount "
                      // placeholderTextColor="lightgray"
                      numeric
                      value // This prop makes the input to get numeric only
                      keyboardType={"numeric"} // This prop help to open numeric keyboard
                    />
                  </View>
                </View>
              </View>

              <View style={{}}>
                <TouchableOpacity style={styles.SelectPetButton}>
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      color: "#282C31",
                      fontFamily: "Metropolisbold", // fontWeight: '700'
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottompart} />
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.homeback}>
            <Image source={require("../assets/home.png")} />
          </View>

          <View style={styles.homeback}>
            <Image source={require("../assets/chart.png")} />
          </View>
          <View style={styles.homeback}>
            <Image source={require("../assets/calendar.png")} />
          </View>
          <View style={styles.homeback}>
            <Image source={require("../assets/tag.png")} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 16,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  // searchIcon: {
  //     padding: 10,
  // },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    fontFamily: "Metropolis",
  },

  SelectPetButton: {
    backgroundColor: "white",
    padding: 13,
    borderRadius: 20,
    marginTop: 10,
    // margin: -10,
    // width: '100%'
  },

  getStarted: {
    flex: 1,
    padding: 15,
    top: 10,
  },

  Number: {
    backgroundColor: "#21D0B3",
    position: "absolute",
    borderRadius: 50,
    left: 40,
    width: 16,
    height: 16,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
    fontFamily: "Metropolis",
  },
  back: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  backArrow: {
    right: 5,
    top: 5,
    fontFamily: "Metropolis",
  },
  backProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Addpayment: {
    left: 5,
    // top: 1,
  },
  textPayment: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Metropolisbold",
  },
  reminder: {
    color: "#c0c4c7",
    fontSize: 18,
    fontFamily: "Metropolis",
  },
  reminder2: {
    color: "#c0c4c7",
    left: 5,
    marginTop: 10,
    fontFamily: "Metropolis",
    fontSize: 12,
  },
  selectpaymentdate: {
    color: "#c0c4c7",
    left: 5,
    fontFamily: "Metropolis",
    fontSize: 12,
  },
  paymentDate: {
    marginTop: 25,
  },

  background: {
    // backgroundColor: "#2b2e33",
    // shadowColor: "black",
    // borderRadius: 10,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    // padding: 13,
    top: 15,
  },
  background2: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backgperiodicity: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    marginTop: 10,
  },
  backgperiodicity2: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  backcategory: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    marginTop: 5,
  },

  walletVisa: {
    display: "flex",
    flexDirection: "row",
  },

  selectDateText: {
    color: "white",
  },
  periodicity: {
    color: "#c0c4c7",
    left: 5,
    fontSize: 12,
  },

  homeback: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    padding: 15,
    marginTop: 10,
  },
  timer: {
    borderRadius: 10,
    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  UpdateCreditCard: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 30,
    height: 30,
    bottom: 8,
    left: 5,
  },
  bottomBackground: {
    padding: 1,
  },
  heading: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
    fontFamily: "Metropolis",
  },
  textinput: {
    position: "absolute",
    borderRightWidth: 0.5,
    height: 40,
    left: 35,
    borderRightColor: "#c0c4c7",
  },
  options: {
    color: "white",
    marginTop: 10,
    fontFamily: "Metropolis",
  },
  amounttopay: {
    marginTop: 10,

    padding: 12,
    paddingLeft: 20,
    backgroundColor: "#eaf6f5",
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 45,
  },
  collapsed: {
    width: 25,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  textinput2: {
    padding: 15,
    height: 40,
    paddingLeft: 20,
    marginTop: 10,
    backgroundColor: "#eaf6f5",
    borderRadius: 10,
    fontFamily: "Metropolisbold",

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    height: 45,
  },
  dollaricon: {
    right: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  dropupicon: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  profileimg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 8,
  },
  collapsedstyle: {
    padding: 5,
    left: 15,
  },
  calendarcolor: {
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 90,
  },
  mainscrollview: {
    height: height - 90,
  },
  visasilver: {
    fontSize: 12,
    color: "white",
    fontWeight: "600",
    fontFamily: "Metropolis",
  },
  paymentsubtext: {
    top: 5,
    color: "#c0c4c7",
    fontFamily: "Metropolis",
    fontSize: 12,
  },
  bottompart: { margin: 10 },
});
