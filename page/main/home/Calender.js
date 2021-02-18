import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import moment from 'moment';
import ClassModal from './ClassModal';
const sampleEvents = [
  { start: '2021-02-16 14:00:00', duration: '00:20:00', note: 'Walk my dog' },
  { start: '2021-02-16 16:00:00', duration: '00:20:00', note: 'Walk my dog' },
  { start: '2021-02-16 18:00:00', duration: '00:20:00', note: 'Walk my dog' },
  {
    start: '2020-03-24 14:00:00',
    duration: '01:00:00',
    note: '1:1 개인 레슨',
    avatar: 'sdfsadfsda',
    teacher: '이인옥 강사님'
  },
  {
    start: '2020-03-24 14:00:00',
    duration: '01:00:00',
    note: '1:1 개인 레슨 ',
    avatar: 'sdfsadfsda',
    teacher: '최승균 강사님'
  },
  {
    start: '2020-03-24 15:00:00',
    duration: '01:00:00',
    note: '1:1 개인 레슨',
    teacher: '이상민 강사님'
  },
  {
    start: '2020-03-24 16:00:00',
    duration: '01:00:00',
    note: '1:1 개인 레슨',
    teacher: '김종하 강사님'
  },
  {
    start: '2020-03-25 15:00:00',
    duration: '01:00:00',
    note: '1:1 개인 레슨',
    teacher: '김사욱 강사님'
  },
  {
    start: '2020-03-25 16:00:00',
    duration: '01:00:00',
    note: '1:1 개인 레슨 최승균 강사님',
    teacher: '최승균 강사님'
  }
];
export default function Calender() {
  const [modal, setModal] = useState(false);
  const [classData, setClassData] = useState();

  const onClassClick = (event) => {
    setModal(true);
    setClassData(event);
  };

  return (
    <>
      <View style={styles.container}>
        <WeeklyCalendar
          events={sampleEvents}
          selected="2020-03-23"
          startWeekday={7}
          weekdayFormat="ddd"
          locale="ko"
          renderEvent={(event, j) => {
            let startTime = moment(event.start).format('LT').toString();
            let duration = event.duration.split(':');
            let seconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2]);
            let endTime = moment(event.start).add(seconds, 'seconds').format('LT').toString();
            return (
              <TouchableOpacity key={j} onPress={() => onClassClick(event)}>
                <View>
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
                      <Image
                        style={styles.avatar}
                        resizeMode="cover"
                        source={{
                          uri:
                            'https://lh3.googleusercontent.com/proxy/-nj5Kk7ehuYP4VhSU5WGjijaQfNuVfF6G8lzdK0UeE5Araf0AIz-lyDBsgyAP9ATCDzZp39Pgr9CfkaQrXRYvJfgD4Fc5HFwRYl03j9jOInPXNhu'
                        }}
                      />
                      <View style={styles.content}>
                        <Text style={styles.eventTitle}>{event.note}</Text>
                        <Text style={styles.eventText}>{event.teacher}</Text>
                      </View>
                      <Text style={styles.count}>5/20명</Text>
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
                <Text style={[styles.monthDateText, { color: '#585858' }]}>
                  {weekdayToAdd.format('M/D').toString()}
                </Text>
                <Text style={[styles.dayText, { color: '#585858' }]}>{weekdayToAdd.format('ddd').toString()}</Text>
              </View>
              <View
                style={[
                  styles.allEvents,
                  eventViews.length === 0 ? { width: '100%', backgroundColor: 'rgba(105, 105, 105, 0.263)' } : {}
                ]}
              >
                {eventViews}
              </View>
            </View>
          )}
          onDayPress={(weekday, i) => {
            console.log(weekday.format('ddd') + ' is selected! And it is day ' + (i + 1) + ' of the week!');
          }}
          themeColor="#585858"
          style={{ height: '98%' }}
          titleStyle={{ color: '#585858' }}
          dayLabelStyle={{ color: '#585858' }}
        />
      </View>
      {modal ? <ClassModal setModal={setModal} classData={classData} /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  component: {
    width: Dimensions.get('window').width,

    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  arrowButton: {
    paddingHorizontal: 10
  },
  title: {
    color: 'grey',
    fontWeight: 'bold'
  },
  week: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 5
  },
  weekdayLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  weekdayLabel: {
    flex: 1,
    alignItems: 'center'
  },
  weekdayLabelText: {
    color: 'grey'
  },
  weekdayNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  weekDayNumber: {
    flex: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  weekDayNumberCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2
  },
  weekDayNumberTextToday: {
    color: 'white'
  },
  schedule: {
    width: '100%'
  },
  ckerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  picker: {
    backgroundColor: 'white',
    paddingBottom: 20
  },
  modal: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  blurredArea: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: 'black'
  },
  modalButton: {
    padding: 15
  },
  modalButtonText: {
    fontSize: 20
  },
  indicator: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute'
  },
  day: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth
  },
  dayLabel: {
    width: '20%',
    alignItems: 'center',
    padding: 10,
    borderRightColor: 'grey',
    borderRightWidth: StyleSheet.hairlineWidth
  },
  monthDateText: {
    fontSize: 20
  },
  dayText: {},
  allEvents: {
    width: '90%'
  },
  event: {
    flex: 1,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  eventDuration: {
    width: '20%',
    justifyContent: 'center'
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  durationDot: {
    width: 4,
    height: 4,
    backgroundColor: 'grey',
    marginRight: 5,
    alignSelf: 'center',
    borderRadius: 4 / 2
  },
  durationDotConnector: {
    height: 20,
    borderLeftColor: 'grey',
    borderLeftWidth: StyleSheet.hairlineWidth,
    position: 'absolute',
    left: 2
  },
  durationText: {
    color: 'grey',
    fontSize: 12
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 10
  },
  eventNote: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventTitle: {
    width: 140,
    fontSize: 13.5,
    fontWeight: 'bold',
    color: '#1f1f1f',
    marginBottom: 3
  },
  eventText: {
    width: '100%',
    fontSize: 11,
    marginTop: 3
  },
  count: {
    fontSize: 11
  },
  content: {
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  lineSeparator: {
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  dot: {
    width: 4,
    height: 4,
    marginTop: 1,
    alignSelf: 'center',
    borderRadius: 4 / 2,
    position: 'absolute',
    bottom: '10%'
  }
});
