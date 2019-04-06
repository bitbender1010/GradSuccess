import React from "react"
import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import AboutBox from "../components/aboutBox"
import Team from "../components/team"
import dan from "../images/dan.jpeg"
import FeaturedTestimonial from "../components/featuredTestimonial"

const breakpoints = [375, 576, 768]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const text1 = "About Us"
const text2 = `We are a top-tier consulting firm positioned to assist ambitious, forward looking
  graduates and midlevel to experienced career people to attain their short-term and long-
  term objectives. At Admission Success you are the focus. We are positioned to help you
  from the moment you embark on your first internship, through graduation and unto your
  first job. We will guide you with those important cover letters and graduate school
  essays, and refine your résumés to get results. From the instant you place your request
  with us, you are rest-assured of a job well done.`
const text3 = "History"
const text4 = `In 2013, Admission Success was formed as a tutorial club for final year students at
Covenant University in 2013. Initially, the group which was called Club 340 at the time
was devoted to tutoring it's members, some of the highest performing students across
the set, for aptitude tests (such as McKinsey's PST), and popular graduate school
exams like the GRE and GMAT. Since 2013, Admission Success has expanded its
services cover clients outside of the university space. Previously focus was on
candidates at undergraduate or graduate school level, but this has since evolved to
include entry-level to experienced professionals looking to advance careers with a new
role or by attaining a second degree.`

class AboutUs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <HomeHero
          title="About Us"
          text="We're always glad to tell our story, this is where our identity is"
          imgUrl="url('./static/images/aboutbg.jpg')"
          openModal={this.onOpenModal}
        />
        <AboutBox first={text1} second={text2} />
        <AboutBox first={text3} second={text4} />
        {/* Breaker */}
        <FeaturedTestimonial openModal={this.onOpenModal} />
        <AboutBox first={"CEO’s Charge"} second={`Dear Client,
        
        GradSuccess is an ambitious and innovative firm with an innovative array of services. Capitalizing on the
unique range of our portfolios, we are set out to provide high-level value for the clients we work with.
From dealings with graduates, mid-career and experienced professionals over the last half-decade, we
have been able to hone the skills and expertise to deliver the best quality improvement services for such
things as CVs, Cover Letters and associated essays.
Our excellence henceforth is founded on three unbroken principles and engrafted values: understanding,
proactiveness and professionalism. With a rigid and disciplined culture, we are set out to tread a new
path in the career and academic consultancy space.
We are on course in establishing a rapidly advancing company that fully caters to the vision of an
innovative and evolving consultancy business. Yet we are not going to rest on our oars, and will continue
to build on our successes first with the business, and then with our clients, creating a resilient and truly
transformational organization in the process.`} />
        <div css={{
          background: 'white',
          padding: '2em'
        }}>
          <div
            css={{
              textAlign: "center",
              fontFamily: "poppins",
              fontSize: "2em",
              fontWeight: "bolder",
              marginBottom: '1em'
            }}
          >
            {" "}
            Meet the Team{" "}
          </div>
          <div
            css={{
              display: "flex",
              margin: "0px auto",
              justifyContent: "center",
              [mq[2]]: {
                flexWrap: "wrap",
              },
            }}
          >
            <Team imgUrl={dan} jobTitle="Founder" name="Daniel Ukasoanya" />
            <Team imgUrl={dan} jobTitle="Co Founder" name="David Ubanyi" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutUs
