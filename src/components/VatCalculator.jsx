"use client";
import { useState, useEffect } from "react";
import { Calculator, RefreshCw } from "lucide-react";

export default function VatCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(20);
  const [type, setType] = useState("hariç"); // hariç veya dahil
  const [result, setResult] = useState({ vat: 0, total: 0, base: 0 });

  useEffect(() => {
    const val = parseFloat(amount);
    if (isNaN(val) || val === 0) {
      setResult({ vat: 0, total: 0, base: 0 });
      return;
    }

    let vatAmount = 0;
    let totalAmount = 0;
    let baseAmount = 0;

    if (type === "hariç") {
      // KDV HARİÇ HESAPLAMA
      vatAmount = val * (rate / 100);
      totalAmount = val + vatAmount;
      baseAmount = val;
    } else {
      // KDV DAHİL HESAPLAMA
      baseAmount = val / (1 + rate / 100);
      vatAmount = val - baseAmount;
      totalAmount = val;
    }

    setResult({
      vat: vatAmount,
      total: totalAmount,
      base: baseAmount
    });
  }, [amount, rate, type]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mt-8">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="p-3 bg-blue-50 text-primary rounded-lg">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="font-bold text-secondary text-lg">KDV Hesaplama</h3>
          <p className="text-xs text-gray-400">Pratik Hesap Makinesi</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Tutar Girişi */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Tutar Giriniz</label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-secondary font-bold focus:border-primary outline-none transition-colors"
            placeholder="0.00"
          />
        </div>

        {/* Oran Seçimi */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase block mb-2">KDV Oranı</label>
          <div className="flex gap-2">
            {[1, 10, 20].map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`flex-1 py-2 rounded-lg text-sm font-bold border transition-all ${rate === r ? 'bg-primary text-white border-primary' : 'bg-white text-gray-500 border-gray-200 hover:border-primary'}`}
              >
                %{r}
              </button>
            ))}
          </div>
        </div>

        {/* Dahil / Hariç Seçimi */}
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setType("hariç")}
            className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${type === "hariç" ? 'bg-white text-secondary shadow-sm' : 'text-gray-400'}`}
          >
            KDV Hariç
          </button>
          <button
            onClick={() => setType("dahil")}
            className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${type === "dahil" ? 'bg-white text-secondary shadow-sm' : 'text-gray-400'}`}
          >
            KDV Dahil
          </button>
        </div>

        {/* Sonuç Alanı */}
        <div className="bg-blue-50 p-4 rounded-xl space-y-2 mt-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Matrah:</span>
            <span className="font-medium">{result.base.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>KDV Tutarı:</span>
            <span className="font-medium text-red-500">+{result.vat.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺</span>
          </div>
          <div className="border-t border-blue-100 pt-2 flex justify-between items-center">
            <span className="font-bold text-secondary">GENEL TOPLAM</span>
            <span className="font-bold text-xl text-primary">{result.total.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺</span>
          </div>
        </div>
      </div>
    </div>
  );
}