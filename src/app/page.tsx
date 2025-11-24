import Image from "next/image";
import {
  HiOutlineArrowTrendingUp,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCpuChip,
} from "react-icons/hi2";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const services = [
  {
    title: "ECU Tuning & Remapping",
    description:
      "Custom calibrations for power, torque, throttle response, and drivability tailored to your build and climate.",
    icon: HiOutlineArrowTrendingUp,
    highlights: ["Dyno-tested maps", "Stage 1-3 setups", "Fuel efficiency gains"],
  },
  {
    title: "Immo Off",
    description:
      "Reliable immobilizer delete solutions for engine swaps, track builds, and simplifying diagnostics.",
    icon: HiOutlineShieldCheck,
    highlights: ["Safe flash process", "Verified checksum", "Plug & play ready"],
  },
  {
    title: "Pops & Bangs",
    description:
      "Aggressive exhaust acoustics tuned for your preference while safeguarding engine health.",
    icon: HiOutlineSparkles,
    highlights: ["Crackle control", "Overrun tuning", "Thermal management"],
  },
  {
    title: "Hard Cut Limiter",
    description:
      "Racing-style hard cut rev limiter for sharper response and motorsport character.",
    icon: HiOutlineBolt,
    highlights: ["RPM precise", "Launch tuned", "Safe cut strategy"],
  },
  {
    title: "EWS Delete",
    description:
      "Seamless EWS bypass solutions for swap projects and restoring vehicles with EWS faults.",
    icon: HiOutlineCpuChip,
    highlights: ["No wiring mods", "OEM functionality", "Backed up flashes"],
  },
  {
    title: "Diagnostics & Error Fixing",
    description:
      "Advanced deep-dive fault finding with OEM tools, real-time logging, and reverse engineering insight.",
    icon: HiOutlineWrenchScrewdriver,
    highlights: ["Live data tracing", "CAN-bus analysis", "Rapid turnaround"],
  },
];

const supportedEcus = ["MS41", "MS42", "MS43", "ME7.2"];

const portfolio = [
  {
    title: "E39 530i Touring",
    result: "Stage 2 remap, pops & bangs, hard cut limiter",
    before: "231 hp / throttle lag, rough cold idle",
    after: "262 hp / instant response, cold start fixed",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "E46 330Ci Track Build",
    result: "EWS delete, immo off, motorsport traction integration",
    before: "Swapped ECU locked, no-start condition",
    after: "Plug & play startup, configurable launch strategy",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "E38 740i Restoration",
    result: "ME7.2 diagnostics, error fixing, OEM+ tuning",
    before: "Multiple CAN faults, limp mode, poor fuel economy",
    after: "Full power restored, refined idle, +11% mpg",
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.25),_transparent_45%)]" />
        <Image
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2000&q=80"
          alt="BMW engine bay"
          fill
          priority
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/90 via-night/95 to-night" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/5 bg-night/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-accent">
            <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
            Precision Tuning Lab
          </div>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a href="#services" className="transition hover:text-foreground">
              Services
            </a>
            <a href="#supported" className="transition hover:text-foreground">
              Supported ECUs
            </a>
            <a href="#portfolio" className="transition hover:text-foreground">
              Portfolio
            </a>
            <a href="#contact" className="transition hover:text-foreground">
              Contact
            </a>
          </nav>
          <a
            href="https://wa.me/1234567890"
            className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/20 md:flex"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </header>

      <section
        id="hero"
        className="mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.4em] text-accent">
            BMW Specialist
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              BMW ECU Programming &amp; Tuning Services
            </h1>
            <p className="text-lg text-muted md:text-xl">
              Harness OEM-level calibration expertise to unlock performance,
              reliability, and character from MS41, MS42, MS43, and ME7.2
              platforms. Custom solutions engineered in-house from reverse
              engineering to final flash.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/1234567890"
              className="flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-widest text-night shadow-glow transition hover:bg-neon"
            >
              <FaWhatsapp className="text-night" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 rounded-full border border-accent/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition hover:bg-white/10"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "ECUs flashed", value: "450+" },
              { label: "Years in BMW tuning", value: "12" },
              { label: "Dyno proven files", value: "100%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <p className="text-3xl font-semibold text-accent">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex-1 md:mt-0">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-accent/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,179,255,0.3),_transparent_60%)]" />
            <Image
              src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1600&q=80"
              alt="BMW ECU tuning setup"
              width={800}
              height={800}
              className="h-full w-full object-cover object-center"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/80 via-transparent to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">
                Live calibrations / Reverse engineered solutions
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                Bench + OBD flashing with verified checksum handling
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-white/5 bg-night/60 py-24 backdrop-blur"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Specialist ECU Services
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                Each file is hand-crafted using proprietary definition files,
                detailed datalogging, and calibration strategies that respect BMW
                engineering tolerances.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.3em] text-accent transition hover:bg-white/10"
            >
              <HiOutlineChatBubbleLeftRight className="text-lg" />
              Book a Consultation
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 transition hover:border-accent/40 hover:bg-accent/5"
              >
                <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
                <service.icon className="text-3xl text-accent" />
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-muted">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-muted group-hover:text-foreground/80"
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="supported"
        className="border-t border-white/5 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%)] py-24"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Supported BMW ECU Platforms
            </h2>
            <p className="mt-4 text-muted">
              Dedicated to the legendary BMW inline-six lineup. Binary-level
              knowledge of Siemens MS4x and Bosch ME7.2 controllers, from boot
              mode flashing to checksum algorithms.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {supportedEcus.map((ecu) => (
              <div
                key={ecu}
                className="rounded-full border border-accent/40 bg-white/5 px-6 py-3 text-sm font-semibold tracking-[0.4em] text-accent shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                {ecu}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/5 bg-night/80 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1600&q=80"
              alt="Laptop connected for ECU tuning"
              fill
              className="object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-night/90 via-transparent to-accent/20" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-night/80 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                Reverse Engineering
              </p>
              <p className="mt-2 text-sm text-muted">
                IDA Pro workflow, custom definitions, CAN sniffing, checksum
                automation, bench harness fabrication.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Hands-on BMW Engineering Expertise
            </h2>
            <p className="mt-6 text-muted">
              I&apos;ve spent the last decade immersed in BMW engine management,
              translating raw hexdumps into precise calibrations. Each binary is
              mapped manually, with proprietary XDF and DAMOS definitions built
              from countless hours on the bench and dyno.
            </p>
            <p className="mt-4 text-muted">
              From swapping an S54 into an E30 to restoring classic E38 sedans,
              I combine electrical diagnostics, solder-level hardware repairs,
              and advanced software tooling to deliver solutions that feel OEM+.
              Every flash is archived, checksum verified, and backed up for
              future revisions.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Dimsport, WinOLS & Hex editor proficiency",
                "Full bench flashing setup with surge protection",
                "Proprietary MS4x logger for real-time data",
                "Remote tuning with secure file exchange",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-muted"
                >
                  <span className="text-accent">▹</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="border-y border-white/5 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_60%)] py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Proven BMW Projects
            </h2>
            <p className="mt-4 text-muted">
              Every build is documented with before &amp; after data to confirm
              gains and reliability. Selected highlights below—more references on
              request.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-accent/70">
                    <span>BMW</span>
                    <span>Verified Project</span>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent/70">{project.result}</p>
                  <div className="rounded-2xl border border-white/5 bg-night/80 p-4 text-sm text-muted">
                    <p>
                      <span className="font-semibold text-foreground">
                        Before:
                      </span>{" "}
                      {project.before}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-foreground">
                        After:
                      </span>{" "}
                      {project.after}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-b border-white/5 bg-night/80 py-24"
      >
        <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Ready to transform your BMW?
            </h2>
            <p className="text-muted">
              Send your ECU details, modifications, and goals. Bench, OBD, and
              remote sessions available worldwide with secure file delivery.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href="https://wa.me/1234567890"
                className="flex items-center gap-4 rounded-3xl border border-accent/40 bg-white/5 px-6 py-4 text-sm text-foreground transition hover:bg-white/10"
              >
                <FaWhatsapp className="text-2xl text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    WhatsApp
                  </p>
                  <p className="text-lg font-semibold">+1 234 567 890</p>
                </div>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 rounded-3xl border border-white/5 bg-white/5 px-6 py-4 text-sm text-foreground transition hover:bg-white/10"
              >
                <FaPhoneAlt className="text-xl text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Call
                  </p>
                  <p className="text-lg font-semibold">+1 234 567 890</p>
                </div>
              </a>
            </div>
            <a
              href="mailto:tuning@precisionbimmerlab.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.3em] text-muted transition hover:bg-white/10"
            >
              tuning@precisionbimmerlab.com
            </a>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-8 text-sm text-muted">
            <h3 className="text-lg font-semibold text-foreground">
              Workshop & Remote Lab
            </h3>
            <p>
              State-of-the-art tuning suite with climate-controlled bench area,
              dyno access, and OEM diagnostic hardware. Remote sessions powered
              by secure calibration pipeline.
            </p>
            <div className="flex items-center gap-3 text-foreground">
              <FaMapMarkerAlt className="text-accent" />
              Munich, Germany & Worldwide Remote
            </div>
            <div className="rounded-2xl border border-white/5 bg-night/80 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/70">
                Availability
              </p>
              <ul className="mt-3 space-y-2 text-muted">
                <li>Bench & OBD flashes: Mon - Sat</li>
                <li>Remote tuning windows: CET evenings</li>
                <li>Emergency recovery support: 24/7 by request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-night/90 py-10 text-center text-xs uppercase tracking-[0.4em] text-muted">
        © {new Date().getFullYear()} Precision Bimmer Lab — BMW ECU Programming
        &amp; Tuning Specialist
      </footer>
    </main>
  );
}
