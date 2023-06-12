import moment from "moment/moment";
import { useEffect, useState } from "react";
import { CourseResponse, DataResponse, getCourse } from "./apis";

const defaults: string[] = ["USD", "EUR", "PLN"];

const ExchangeRate = () => {
  const [courseError, setCourseError] = useState<CourseResponse | "">("");
  const [courseVal, setCourseVal] = useState<string>(defaults[0]);
  const [burger, setBurger] = useState<boolean>(false);
  const [date, setDate] = useState<string>(moment().format("YYYY-MM-DD"));
  const [currentRate, setCurrentRate] = useState<string>("");

  const [courseData, setCourseData] = useState<DataResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: CourseResponse = await getCourse(
        moment(date).format("YYYYMMDD")
      );
      if (response.status === 404) {
        setCourseError(response);
      } else {
        setCourseData(
          response.data.map((element) =>
            defaults.includes(element.cc)
              ? element
              : { ...element, active: false }
          )
        );
      }
    };
    fetchData();
  }, [courseData.length, date]);

  useEffect(() => {    
      const selectedCourse = courseData.find(
        (element) => element.cc === courseVal
      );     

      if (selectedCourse) {
        setCurrentRate(selectedCourse.rate.toString());
      } else {
        setCurrentRate("");
      }
    
  }, [courseVal, courseData]);

  const checkOne = (el: DataResponse) => {
    setCourseData((privState) =>
      privState.map((element) =>
        element.cc === el.cc ? { ...element, active: !element.active } : element
      )
    );
  };

  const checkDefault = () => {
    setCourseData((privState) =>
      privState.map((element) =>
        defaults.includes(element.cc) ? element : { ...element, active: false }
      )
    );
  };

  const checkAll = () => {
    setCourseData((privState) =>
      privState.map((element) => ({ ...element, active: true }))
    );
  };

  const optionChen = (e: string) => {
    setCourseVal(e);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDate(event.target.value);
      
  };

  return (
    <div>
      <div>
        <button onClick={() => setBurger((privState) => !privState)}>
          Menu
        </button>
      </div>
      {!burger && (
        <div>
          <div>
            <input
              type='date'
              value={date}
              min='1996-01-06'
              max={moment().format("YYYY-MM-DD")}
              onChange={handleDateChange}
            />
          </div>
          <div>
            <select onChange={(e) => optionChen(e.target.value)}>
              {courseData
                .filter((opt) => opt.active)
                .map((opt) => (
                  <option key={opt.cc} value={opt.cc}>
                    {opt.cc}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <input placeholder='0' type='number' />
            <span id='currentRate'>{currentRate}</span>
            <input placeholder='0' type='number' />
            <input placeholder='0' type='number' readOnly value='12' />
          </div>
        </div>
      )}
      {burger && (
        <div>
          <div>
            <button onClick={() => checkDefault()}>remove all</button>
            <button onClick={() => checkAll()}>choose all</button>
          </div>
          <ul>
            {courseData.map((el) => (
              <li key={el.cc}>
                <div>{el.poz}</div>
                <h4>{el.txt}</h4>
                <input
                  type='checkbox'
                  checked={el.active}
                  onChange={() => checkOne(el)}></input>
                <div>{el.cc}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;
