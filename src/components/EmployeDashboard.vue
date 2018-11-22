<template>
    <div>
        <nav-bar></nav-bar>
        <h1>Employe</h1>
        This is your dashboard
        <calendar style="height: 800px;"
            :calendars="calendarList"
            :schedules="scheduleList"
            :view="view"
            :taskView="taskView"
            :scheduleView="scheduleView"
            :theme="theme"
            :week="week"
            :month="month"
            :timezones="timezones"
            :disableDblClick="disableDblClick"
            :isReadOnly="isReadOnly"
            :template="template"
            :useCreationPopup="useCreationPopup"
            :useDetailPopup="useDetailPopup"/>

        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import 'tui-calendar/dist/tui-calendar.css'
    import { Calendar } from '@toast-ui/vue-calendar'

    export default {
        components: {
            NavBar,
            'calendar': Calendar,
        },
        data () {
            return {
                calendarList: [
                    {
                        id: '0',
                        name: 'home'
                    },
                    {
                        id: '1',
                        name: 'office'
                    }
                ],
                scheduleList: [
                    {
                        id: '1',
                        calendarId: '1',
                        title: 'event 1',
                        category: 'time',
                        dueDateClass: '2018-11-22T12:30:00+01:00',
                        start: '2018-11-22T12:30:00+01:00',
                        end: '2018-10-22T13:30:00+01:00'
                    },
                    {
                        id: '2',
                        calendarId: '1',
                        title: 'event 2',
                        category: 'time',
                        dueDateClass: '',
                        start: '2018-11-23T16:30:00+01:00',
                        end: '2018-10-23T17:30:00+01:00'
                    }
                ],
                view: 'week',
                taskView: true,
                scheduleView: ['time'],
                theme: {
                    'month.dayname.height': '30px',
                    'month.dayname.borderLeft': '1px solid #ff0000',
                    'month.dayname.textAlign': 'center',
                    'week.today.color': '#333',
                    'week.daygridLeft.width': '100px',
                    'week.timegridLeft.width': '100px'
                },
                week: {
                    narrowWeekend: true,
                    showTimezoneCollapseButton: true,
                    timezonesCollapsed: false
                },
                month: {
                    visibleWeeksCount: 6,
                    startDayOfWeek: 1
                },
                timezones: [{
                    timezoneOffset: 60,
                    displayLabel: 'GMT+01:00',
                    tooltip: 'Paris'
                }],
                disableDblClick: true,
                isReadOnly: false,
                template: {
                    milestone: function(schedule) {
                        return `<span style="color:red;">${schedule.title}</span>`;
                    },
                    milestoneTitle: function() {
                        return 'Milestone';
                    },
                },
                useCreationPopup: true,
                useDetailPopup: true,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>