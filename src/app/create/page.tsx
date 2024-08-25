import Image from 'next/image'

// CSS
import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
// 프로그래스 바 임포트
import { Progress } from "@/components/ui/progress"
import LabelCalendar from "@/components/calendar/LabelCalendar";

function page() {
  return (
    <div className={styles.container}>
      <header className={styles.container__header}>
        <div className={styles.container__header__contents}>
          <input type="text" placeholder="Enter Title Here" className={styles.input} />
          <div className={styles.progressBar}>
            <span className={styles.progressBar__status}>0/10 completed</span>
            {/* 프로그래스 바 ui */}
            <Progress value={33} className="w-[30%] h-2" indicatorColor="bg-green-500"/>
            <div className={styles.calendarBox}>
              <div className={styles.calendarBox__calendar}>
                {/* 캘린더 UI */}
                <LabelCalendar label="from" />
                <LabelCalendar label="to" />
              </div>
              <Button variant={"outline"} className="w-[15%] border-orange-500 bg-orange-400 text-white hover:bg-orange-400 hover:text-white">
                Add New Board
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.container__body}>
        <div className={styles.container__body__infoBox}>
          <span className={styles.title}>There is no board yet.</span>
          <span className={styles.subTitle}>Click the button and start flashing!</span>
          <button className={styles.button}>
            <Image src="/round-button.svg" alt="round-button" width={100} height={100}/>
          </button>
        </div>
      </main>
    </div>
  )
}

export default page