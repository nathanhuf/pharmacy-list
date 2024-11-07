import React, { useEffect, useMemo, useState } from "react";
import mockPharmacies from "./mocks/list.json";
import { PharmacyList } from "./components/PharmacyList/PharmacyList";

function App() {
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const availablePharmacies = useMemo(
    () => pharmacies.filter(({ selected }) => !selected),
    [pharmacies]
  );
  const selectedPharmacies = useMemo(
    () => pharmacies.filter(({ selected }) => selected),
    [pharmacies]
  );

  useEffect(() => {
    setPharmacies(mockPharmacies);
  }, []);

  const handleSelectPharmacy = (pharmacyId) => () => {
    setSelectedPharmacy(pharmacyId);
  };

  const moveButtonDisabled = useMemo(
    () => !selectedPharmacy,
    [selectedPharmacy]
  );

  const changePharamySelected = (selected) => {
    if (!selectedPharmacy) return;
    setPharmacies(
      pharmacies.map((pharmacy) =>
        pharmacy.id === selectedPharmacy ? { ...pharmacy, selected } : pharmacy
      )
    );
  };

  const selectPharmacy = () => {
    if (selectedPharmacies.length === 0) {
      changePharamySelected(true);
    }
  };

  const deselectPharmacy = () => {
    changePharamySelected(false);
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 16,
          padding: 16,
        }}
      >
        <PharmacyList
          list={availablePharmacies}
          heading={"Available"}
          selected={selectedPharmacy}
          onSelect={handleSelectPharmacy}
        />
        <div
          style={{
            width: 120,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <button disabled={moveButtonDisabled} onClick={selectPharmacy}>
            {"==>"}
          </button>
          <button disabled={moveButtonDisabled} onClick={deselectPharmacy}>
            {"<=="}
          </button>
        </div>
        <PharmacyList
          list={selectedPharmacies}
          heading={"Selected"}
          selected={selectedPharmacy}
          onSelect={handleSelectPharmacy}
        />
      </div>
    </div>
  );
}

export default App;
