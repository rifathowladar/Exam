import useCountdown from "../hooks/useCountdown";
import Container from "../components/layout/Container";

import bestdeals1 from "../assets/images/bestdeals1.webp";
import bestdeals2 from "../assets/images/bestdeals2.webp";
import bestdeals3 from "../assets/images/bestdeals3.webp";


const BestDeals = () => {
 const { total, days, hours, minutes, seconds } =
    useCountdown("2026-11-31T23:59:59");

  if (total === 0) {
    return (
      <Container>
        <div className="text-center py-20 text-xl font-bold text-red-500">
          Offer Expired
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 lg:py-16">

        {/* Card 1 with Timer */}
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src={bestdeals1}
            alt="Best Deal"
            className="w-full h-full object-cover transition group-hover:scale-103"
          />

          {/* Timer */}
          <div className="absolute inset-0 flex top-16 sm:top-30 justify-center">
            <div className="flex gap-4 text-white text-center px-4 py-3 rounded-lg">
              <div>
                <h4 className="font-bold">{days}</h4>
                <p className="text-xs">Days</p>
              </div>

              <div>
                <h4 className="font-bold">{hours}</h4>
                <p className="text-xs">Hours</p>
              </div>

              <div>
                <h4 className="font-bold">{minutes}</h4>
                <p className="text-xs">Min</p>
              </div>

              <div>
                <h4 className="font-bold">{seconds}</h4>
                <p className="text-xs">Sec</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-lg group">
          <img
            src={bestdeals2}
            alt="Best Deal"
            className="w-full h-full object-cover transition group-hover:scale-103"
          />
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-lg group">
          <img
            src={bestdeals3}
            alt="Best Deal"
            className="w-full h-full object-cover transition group-hover:scale-103"
          />
        </div>

      </div>
    </Container>
  );
};

export default BestDeals;