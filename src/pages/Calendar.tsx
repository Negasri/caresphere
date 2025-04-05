
import React from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock } from "lucide-react";

const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Mock data
  const appointments = [
    { 
      id: 1, 
      title: "Doctor Appointment", 
      date: new Date(2025, 3, 7, 10, 0), 
      type: "medical",
      location: "Dr. Smith's Office",
      notes: "Bring medication list" 
    },
    { 
      id: 2, 
      title: "Video Call with Family", 
      date: new Date(2025, 3, 5, 16, 0), 
      type: "social",
      location: "Home",
      notes: "Call with daughter and grandchildren" 
    },
    { 
      id: 3, 
      title: "Pharmacy Pickup", 
      date: new Date(2025, 3, 8, 14, 0), 
      type: "medical",
      location: "CVS Pharmacy",
      notes: "Pick up new prescription" 
    },
    { 
      id: 4, 
      title: "Community Center Event", 
      date: new Date(2025, 3, 10, 11, 0), 
      type: "social",
      location: "Senior Community Center",
      notes: "Spring celebration lunch" 
    }
  ];

  // Filter appointments for today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const todayAppointments = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    appointmentDate.setHours(0, 0, 0, 0);
    return appointmentDate.getTime() === today.getTime();
  });

  // Filter appointments for upcoming (not today, but within next 7 days)
  const upcomingAppointments = appointments.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    appointmentDate.setHours(0, 0, 0, 0);
    const diff = appointmentDate.getTime() - today.getTime();
    const daysDiff = diff / (1000 * 3600 * 24);
    return daysDiff > 0 && daysDiff <= 7;
  });

  // Format time for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Format date for display
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen pb-20 md:pl-64">
      <Navigation />
      
      <main className="container max-w-4xl pt-8 px-4">
        <header className="mb-8 text-left">
          <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
          <p className="text-muted-foreground">Manage your appointments and events</p>
        </header>

        <div className="grid md:grid-cols-[350px_1fr] gap-8">
          <div>
            <Card>
              <CardContent className="p-4">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="w-full"
                />
              </CardContent>
            </Card>
            <Button className="w-full mt-4">
              <CalendarCheck className="mr-2 h-4 w-4" /> Add New Appointment
            </Button>
          </div>

          <div>
            <Tabs defaultValue="today" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="all">All Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="today">
                <h2 className="text-xl font-semibold mb-4">{formatDate(new Date())}</h2>
                {todayAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {todayAppointments.map((appointment) => (
                      <Card key={appointment.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{appointment.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1">
                                <Clock className="mr-1 h-4 w-4" />
                                {formatTime(appointment.date)}
                              </div>
                              <p className="text-sm mt-2">{appointment.location}</p>
                              <p className="text-sm text-muted-foreground mt-1">{appointment.notes}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              appointment.type === 'medical' ? 'bg-care-100 text-care-800' : 'bg-healing-100 text-healing-800'
                            }`}>
                              {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No appointments scheduled for today.</p>
                )}
              </TabsContent>
              
              <TabsContent value="upcoming">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <Card key={appointment.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium">{appointment.title}</h3>
                              <div className="text-sm text-muted-foreground mt-1">
                                {formatDate(appointment.date)} at {formatTime(appointment.date)}
                              </div>
                              <p className="text-sm mt-2">{appointment.location}</p>
                              <p className="text-sm text-muted-foreground mt-1">{appointment.notes}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              appointment.type === 'medical' ? 'bg-care-100 text-care-800' : 'bg-healing-100 text-healing-800'
                            }`}>
                              {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No upcoming appointments scheduled.</p>
                )}
              </TabsContent>
              
              <TabsContent value="all">
                <h2 className="text-xl font-semibold mb-4">All Scheduled Events</h2>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">{appointment.title}</h3>
                            <div className="text-sm text-muted-foreground mt-1">
                              {formatDate(appointment.date)} at {formatTime(appointment.date)}
                            </div>
                            <p className="text-sm mt-2">{appointment.location}</p>
                            <p className="text-sm text-muted-foreground mt-1">{appointment.notes}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            appointment.type === 'medical' ? 'bg-care-100 text-care-800' : 'bg-healing-100 text-healing-800'
                          }`}>
                            {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
