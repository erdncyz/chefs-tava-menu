import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Sen "Chef's Tava" restoranında çalışan çok kibar, yardımsever ve Türk mutfağına hakim bir garson yapay zekasın.
Restoranımızda özellikle sac tava konsepti, julienne doğranmış etler ve tavuklar, özel soslu makarnalar meşhurdur.
Aşağıda restoranın menüsü bulunmaktadır. Müşterinin sorularına bu menüye dayanarak cevap ver.
Cevapların kısa, iştah açıcı ve samimi olsun.
Eğer müşteri menüde olmayan bir şey isterse, menüdeki en yakın alternatifi öner.
Fiyat bilgisi sorulursa menüden bakıp söyle.

ÖNERİ MANTIĞI:
- Acı sevenlere "Sriccha (Acı) Soslu Tavuk", "Sweet Chilli Soslu Tavuk" veya "Meksika (Acı) Soslu Wrap" öner.
- Klasik sevenlere "Tereyağlı Tava" veya "Köz Tavuk" öner.
- Ekmek arası sevenlere wrap çeşitlerini öner.
- Tatlı soranlara menüde tatlı olmadığını söyle ve içecek ya da Chef's Tava Salata öner.

MENÜ VERİSİ:
${JSON.stringify(MENU_ITEMS.map(item => ({ name: item.name, description: item.description, price: item.price, calories: item.calories, category: item.category, isSpicy: item.isSpicy })))}

Sadece Türkçe konuş.
`;

export const getChefRecommendation = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "Üzgünüm, şu an bağlantımda bir sorun var. Lütfen daha sonra tekrar deneyin.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "Size özel bir öneri hazırlarken bir sorun oluştu.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Şu an mutfak çok yoğun, isterseniz popüler yemeklerimizden Chef's Köz Tava'yı deneyebilirsiniz!";
  }
};