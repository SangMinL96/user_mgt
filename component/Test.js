import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

import WeeklyCalendar from "react-native-weekly-calendar";
import moment from "moment";

export default function Test() {
  const sampleEvents = [
    { start: "2021-02-16 14:00:00", duration: "00:20:00", note: "Walk my dog" },
    { start: "2021-02-16 16:00:00", duration: "00:20:00", note: "Walk my dog" },
    { start: "2021-02-16 18:00:00", duration: "00:20:00", note: "Walk my dog" },
    {
      start: "2020-03-24 14:00:00",
      duration: "01:00:00",
      note: "Doctor's appointment",
    },
    {
      start: "2020-03-25 08:00:00",
      duration: "00:30:00",
      note: "Morning exercise",
    },
    {
      start: "2020-03-25 14:00:00",
      duration: "02:00:00",
      note: "Meeting with client",
    },
    {
      start: "2020-03-25 19:00:00",
      duration: "01:00:00",
      note: "Dinner with family",
    },
    { start: "2020-03-26 09:30:00", duration: "01:00:00", note: "Schedule 1" },
    { start: "2020-03-26 11:00:00", duration: "02:00:00", note: "Schedule 2" },
    { start: "2020-03-26 15:00:00", duration: "01:30:00", note: "Schedule 3" },
    { start: "2020-03-26 18:00:00", duration: "02:00:00", note: "Schedule 4" },
    { start: "2020-03-26 22:00:00", duration: "01:00:00", note: "Schedule 5" },
  ];

  return (
    <View style={styles.container}>
      <WeeklyCalendar
        events={sampleEvents}
        selected="2020-03-23"
        startWeekday={7}
        weekdayFormat="ddd"
        locale="ko"
        renderEvent={(event, j) => {
          let startTime = moment(event.start).format("LT").toString();
          let duration = event.duration.split(":");
          let seconds =
            parseInt(duration[0]) * 3600 +
            parseInt(duration[1]) * 60 +
            parseInt(duration[2]);
          let endTime = moment(event.start)
            .add(seconds, "seconds")
            .format("LT")
            .toString();
          return (
            <TouchableOpacity key={j} onPress={(ev) => console.log("asdfsa")}>
              <View >
                <View style={styles.event}>
                  <View style={styles.eventDuration}>
                    <View style={styles.durationContainer}>
                      <View style={styles.durationDot} />
                      <Text style={styles.durationText}>{startTime}</Text>
                    </View>
                    <View style={{ paddingTop: 10 }} />
                    <View style={styles.durationContainer}>
                      <View style={styles.durationDot} />
                      <Text style={styles.durationText}>{endTime}</Text>
                    </View>
                    <View style={styles.durationDotConnector} />
                  </View>
                  <View style={styles.eventNote}>
                    <Text style={styles.eventText}>{event.note}</Text>
                  </View>
                </View>
                <View style={styles.lineSeparator} />
              </View>
            </TouchableOpacity>
          );
        }}
        renderDay={(eventViews, weekdayToAdd, i) => (
          <View key={i.toString()} style={styles.day}>
            <View style={styles.dayLabel}>
              <Text style={[styles.monthDateText, { color: "pink" }]}>
                {weekdayToAdd.format("M/D").toString()}
              </Text>
              <Text style={[styles.dayText, { color: "pink" }]}>
                {weekdayToAdd.format("ddd").toString()}
              </Text>
            </View>
            <View
              style={[
                styles.allEvents,
                eventViews.length === 0
                  ? { width: "100%", backgroundColor: "pink" }
                  : {},
              ]}
            >
              {eventViews}
            </View>
          </View>
        )}
        onDayPress={(weekday, i) => {
          console.log(
            weekday.format("ddd") +
              " is selected! And it is day " +
              (i + 1) +
              " of the week!"
          );
        }}
        themeColor="pink"
        style={{ height: 600 }}
        titleStyle={{ color: "blue" }}
        dayLabelStyle={{ color: "green" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "grey",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  title: {
    color: "grey",
    fontWeight: "bold",
  },
  week: {
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 5,
  },
  weekdayLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  weekdayLabel: {
    flex: 1,
    alignItems: "center",
  },
  weekdayLabelText: {
    color: "grey",
  },
  weekdayNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  weekDayNumber: {
    flex: 1,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  weekDayNumberCircle: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  weekDayNumberTextToday: {
    color: "white",
  },
  schedule: {
    width: "100%",
  },
  pickerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  picker: {
    backgroundColor: "white",
    paddingBottom: 20,
  },
  modal: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  blurredArea: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: "black",
  },
  modalButton: {
    padding: 15,
  },
  modalButtonText: {
    fontSize: 20,
  },
  indicator: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    position: "absolute",
  },
  day: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderTopColor: "grey",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  dayLabel: {
    width: "20%",
    alignItems: "center",
    padding: 10,
    borderRightColor: "grey",
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  monthDateText: {
    fontSize: 20,
  },
  dayText: {},
  allEvents: {
    width: "80%",
  },
  event: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  eventDuration: {
    width: "30%",
    justifyContent: "center",
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  durationDot: {
    width: 4,
    height: 4,
    backgroundColor: "grey",
    marginRight: 5,
    alignSelf: "center",
    borderRadius: 4 / 2,
  },
  durationDotConnector: {
    height: 20,
    borderLeftColor: "grey",
    borderLeftWidth: StyleSheet.hairlineWidth,
    position: "absolute",
    left: 2,
  },
  durationText: {
    color: "grey",
    fontSize: 12,
  },
  eventNote: {},
  lineSeparator: {
    width: "100%",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  dot: {
    width: 4,
    height: 4,
    marginTop: 1,
    alignSelf: "center",
    borderRadius: 4 / 2,
    position: "absolute",
    bottom: "10%",
  },
});
