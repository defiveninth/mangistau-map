import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// -------------------- PATH SETUP --------------------
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const INPUT_FILE = path.join(__dirname, "hotels.json")
const OUTPUT_FILE = path.join(__dirname, "hotelDetailsData.js")

// -------------------- LOAD DATA --------------------
if (!fs.existsSync(INPUT_FILE)) {
  console.error("❌ hotels.json not found")
  process.exit(1)
}

const hotelsArray = JSON.parse(fs.readFileSync(INPUT_FILE, "utf-8"))

if (!Array.isArray(hotelsArray)) {
  console.error("❌ JSON root must be an array")
  process.exit(1)
}

// -------------------- TRANSFORM ARRAY → OBJECT --------------------
const hotelDetailsData = {}

hotelsArray.forEach(item => {
  if (!item.id) return

  hotelDetailsData[item.id] = {
    title: item.title || "",
    category: item.title_ru || "",
    location: item.location || "",
    image: item.image || "",
    price: item.price || "",
    description: "",
    features: [],
    amenities: "",
    phone: "",
    email: "",
    gallery: item.image ? [item.image] : [],
	booking: ""
  }
})

// -------------------- SAVE --------------------
const output =
  "const hotelDetailsData = " +
  JSON.stringify(hotelDetailsData, null, 2) +
  "\n\nexport default hotelDetailsData\n"

fs.writeFileSync(OUTPUT_FILE, output, "utf-8")

console.log("✅ hotelDetailsData generated successfully")
console.log(`📄 Output file: ${OUTPUT_FILE}`)
