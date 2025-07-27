
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Heart, 
  Stethoscope, 
  Calendar, 
  Plus,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Baby,
  Shield,
  Thermometer
} from 'lucide-react';
import { getPhoto } from '@/data/photoAssets';

const HealthTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const healthMetrics = [
    {
      id: 'temperature',
      title: 'Temperature',
      value: '36.8°C',
      status: 'normal',
      icon: Thermometer,
      color: 'primary-green',
      image: getPhoto('health', 'healthyBaby')
    },
    {
      id: 'heartRate',
      title: 'Heart Rate',
      value: '120 bpm',
      status: 'normal',
      icon: Heart,
      color: 'primary-blue',
      image: getPhoto('health', 'checkup')
    },
    {
      id: 'weight',
      title: 'Weight',
      value: '8.5 kg',
      status: 'gaining',
      icon: Baby,
      color: 'primary-pink',
      image: getPhoto('health', 'doctorVisit')
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      type: 'Wellness Check',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-02-15',
      time: '10:00 AM',
      image: getPhoto('health', 'doctorVisit'),
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'Vaccination',
      doctor: 'Dr. Michael Chen',
      date: '2024-02-20',
      time: '2:30 PM',
      image: getPhoto('health', 'vaccination'),
      status: 'scheduled'
    },
    {
      id: 3,
      type: 'Growth Check',
      doctor: 'Dr. Sarah Johnson',
      date: '2024-03-01',
      time: '9:00 AM',
      image: getPhoto('health', 'checkup'),
      status: 'pending'
    }
  ];

  const vaccinationSchedule = [
    {
      id: 1,
      vaccine: 'DTaP',
      description: 'Diphtheria, Tetanus, Pertussis',
      dueDate: '2024-02-20',
      status: 'upcoming',
      image: getPhoto('health', 'vaccination'),
      age: '2 months'
    },
    {
      id: 2,
      vaccine: 'Hepatitis B',
      description: 'Hepatitis B vaccine',
      dueDate: '2024-01-15',
      status: 'completed',
      image: getPhoto('health', 'vaccination'),
      age: 'Birth'
    },
    {
      id: 3,
      vaccine: 'Rotavirus',
      description: 'Rotavirus vaccine',
      dueDate: '2024-03-15',
      status: 'upcoming',
      image: getPhoto('health', 'vaccination'),
      age: '4 months'
    }
  ];

  const recentHealthRecords = [
    {
      id: 1,
      type: 'Wellness Check',
      date: '2024-01-10',
      doctor: 'Dr. Sarah Johnson',
      notes: 'Baby is developing well, weight gain is on track',
      image: getPhoto('health', 'checkup'),
      status: 'completed'
    },
    {
      id: 2,
      type: 'Vaccination',
      date: '2024-01-05',
      doctor: 'Dr. Michael Chen',
      notes: 'Hepatitis B vaccine administered, no adverse reactions',
      image: getPhoto('health', 'vaccination'),
      status: 'completed'
    },
    {
      id: 3,
      type: 'Growth Check',
      date: '2023-12-20',
      doctor: 'Dr. Sarah Johnson',
      notes: 'Height and weight measurements recorded',
      image: getPhoto('health', 'doctorVisit'),
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary-green/20 to-primary-blue/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
            <Heart className="h-6 w-6 text-primary-green" />
          </div>
          <Badge variant="gradient" className="text-sm">
            Health Tracker
          </Badge>
        </div>
        
        <h1 className="kid-heading text-4xl md:text-5xl">
          Baby Health
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Monitor your baby's health, track vaccinations, and manage appointments with comprehensive health records.
        </p>
      </div>

      {/* Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.id} className="kid-card-gradient kid-hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={metric.image}
                    alt={metric.title}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      e.currentTarget.src = getPhoto('placeholders', 'health');
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{metric.title}</h3>
                    <p className="text-2xl font-bold text-primary-green">{metric.value}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-${metric.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${metric.color}`} />
                  </div>
                </div>
                
                <Badge 
                  variant={metric.status === 'normal' ? 'success' : 'warning'} 
                  className="text-xs"
                >
                  {metric.status}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-2xl p-1">
        <Button
          variant={activeTab === 'overview' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('overview')}
          className="flex-1"
        >
          <Activity className="h-4 w-4 mr-2" />
          Overview
        </Button>
        <Button
          variant={activeTab === 'appointments' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('appointments')}
          className="flex-1"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Appointments
        </Button>
        <Button
          variant={activeTab === 'vaccinations' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('vaccinations')}
          className="flex-1"
        >
          <Shield className="h-4 w-4 mr-2" />
          Vaccinations
        </Button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Recent Health Records */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Recent Health Records</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentHealthRecords.map((record) => (
                <Card key={record.id} className="kid-card-glass kid-hover-scale">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={record.image}
                        alt={record.type}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = getPhoto('placeholders', 'health');
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{record.type}</h4>
                        <p className="text-xs text-gray-600">{record.doctor}</p>
                        <Badge variant="success" className="text-xs mt-1">
                          {record.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2">{record.notes}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{record.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'appointments' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Upcoming Appointments</h3>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingAppointments.map((appointment) => (
              <Card key={appointment.id} className="kid-card-glass kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={appointment.image}
                      alt={appointment.type}
                      className="w-12 h-12 rounded-lg object-cover"
                      onError={(e) => {
                        e.currentTarget.src = getPhoto('placeholders', 'health');
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{appointment.type}</h4>
                      <p className="text-xs text-gray-600">{appointment.doctor}</p>
                      <Badge 
                        variant={appointment.status === 'confirmed' ? 'success' : 'warning'} 
                        className="text-xs mt-1"
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'vaccinations' && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Vaccination Schedule</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vaccinationSchedule.map((vaccine) => (
              <Card key={vaccine.id} className="kid-card-gradient kid-hover-scale">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative">
                      <img 
                        src={vaccine.image}
                        alt={vaccine.vaccine}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = getPhoto('placeholders', 'health');
                        }}
                      />
                      {vaccine.status === 'completed' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{vaccine.vaccine}</h4>
                      <p className="text-xs text-gray-600">{vaccine.description}</p>
                      <Badge 
                        variant={vaccine.status === 'completed' ? 'success' : 'warning'} 
                        className="text-xs mt-1"
                      >
                        {vaccine.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Due: {vaccine.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Baby className="h-3 w-3" />
                      <span>Age: {vaccine.age}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Health Summary */}
      <Card className="kid-card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary-green" />
            Health Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-green">5</div>
              <div className="text-sm text-gray-600">Completed Checkups</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-blue">3</div>
              <div className="text-sm text-gray-600">Upcoming Appointments</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-pink">8</div>
              <div className="text-sm text-gray-600">Vaccines Due</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-orange">100%</div>
              <div className="text-sm text-gray-600">Health Score</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthTracker;
