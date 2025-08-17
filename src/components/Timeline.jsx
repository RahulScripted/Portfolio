import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData } from '../assets/assets';

const Timeline = () => {
  return (
    <div className='overflow-hidden flex flex-col gap-2'>

        {/* Tile */}
        <h1 className="text-5xl md:text-7xl lg:text-12xl font-bold text-white mb-12 text-center">
            MY<span className="text-[#353334]"> WORKS</span>
        </h1>

        {/* Timeline */}
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
                    icon={<img width={25} src={event.img} alt='img'/>}
                >
                    {/* Subtitle */}
                    <h5 className='text-sm mb-2 font-medium'>{event.date}</h5>

                    {/* Title */}
                    <h3 className="font-semibold text-md lg:text-lg">{event.title}</h3>

                    {/* Description */}
                    <p  style={{
                        fontWeight:'400', marginTop:'10px', marginBottom:'15px'
                    }}>{event.description}</p>

                    <a href={event.btnLink}  target='_blank' rel='noopener noreferrer' className='px-5 py-1 bg-[#1C1A19] cursor-pointer text-white rounded-full border hover:bg-white hover:text-[#1C1A19] transition-all duration-500'>{console.log(event.btnLink)}{event.btnText}</a>

                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div>
  );
};

export default Timeline;