import { Lecture } from "../Lecture";
import { LectureSet } from "../LectureSet";

export class Organizer
{
	/**
	 * Class constructor
	 * @param array lectures : Array of lectures
	 * @param number maxTrackSize
	 */
	constructor(lectures, maxMinutes)
	{
		this.lectures = lectures;
		this.maxMinutes = maxMinutes;
		this.rawDataBootstrap();
		this.test = [];
	}
	
	rawDataBootstrap()
	{
		this.rawData = [];

		for (let i = 0; i <= this.lectures.length; i++)
		{
			this.rawData.push([]);

			for (let j = 0; j <= this.maxMinutes; j++)
			{
				this.rawData[i].push(-1);
			}
		}
	}

	organize()
	{
		
	}

	getBestCombination(iterator, minutesResting)
	{
		if (iterator === this.lectures.length) 
		{
			this.rawData[iterator][minutesResting] = new LectureSet();
		}
		else if (minutesResting === 0) 
		{
			this.rawData[iterator][minutesResting] = new LectureSet();
		}
		else if (this.lectures[iterator].timeInMinutes > minutesResting)
		{
			this.rawData[iterator][minutesResting] = this.getBestCombination(iterator + 1, minutesResting);
		}
		else
		{
			const currentTimeInMinutes = this.lectures[iterator].timeInMinutes;

			const first = new LectureSet();
			const firstMember1 = this.lectures[iterator]; 
			const firstMember2 = this.getBestCombination(iterator + 1, minutesResting - currentTimeInMinutes);

			first.increaseTime(firstMember1.timeInMinutes);
			
			for (let lecture of firstMember2.lectures)
			{
				first.increaseTime(lecture.timeInMinutes);
			}
			
			first.addLecture(firstMember1);
			first.concatLectures(firstMember2.lectures);
			
			// LectureSet
			const second = this.getBestCombination(iterator + 1, minutesResting);

			if (first.timeOfLectures >= second.timeOfLectures)
			{
				this.rawData[iterator][minutesResting] = first;
			}
			else
			{
				this.rawData[iterator][minutesResting] = second;
			}
		}

		return this.rawData[iterator][minutesResting];
	}
}