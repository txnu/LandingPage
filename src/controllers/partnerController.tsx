import { useEffect, useState } from "react";
import { fetchData } from "../services/partner";
import Avatar from "../components/Avatars/Avatar";

interface Partner {
  idpartner: number;
  image: string;
  partner_name: string;
}

const DataPartner = () => {
  const [data, setData] = useState<Partner[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDataPartner = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setError("Failed to load data");
      }
    };

    getDataPartner();
  }, []);

  const baseImageUrl = "http://localhost:5001/static/";

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data.length > 0 ? (
        data.map((partner, idpartner) => (
          <div key={idpartner} className="flex flex-col items-center">
            <Avatar
              imageUrl={`${baseImageUrl}${partner.image}`}
              partnerName={partner.partner_name}
            />
            <p className="mt-4 text-center">{partner.partner_name}</p>
          </div>
        ))
      ) : (
        <div>No partners found.</div>
      )}
    </>
  );
};

export default DataPartner;
