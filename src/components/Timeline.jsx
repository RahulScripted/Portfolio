import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData } from '../assets/assets';

const Timeline = () => {
  return (
    <div className='overflow-hidden'>
        <VerticalTimeline className='flex flex-col'>
            {timelineData.map((event,index) => (
                <VerticalTimelineElement className='text-black cursor-pointer'
                    key={index}
                    iconStyle={{
                        background: '#1C1A19',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    icon={<img width={20} src={event.img} alt='img'/>}
                >
                    <h5 className='text-sm mb-2 font-medium'>{event.date}</h5>
                    <h3 className="font-semibold text-md lg:text-lg">{event.title}</h3>
                    <p style={{fontWeight:'400', marginTop:'10px'}}>{event.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div>
  );
};

export default Timeline;