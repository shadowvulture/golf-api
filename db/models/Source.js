const SourceSchema = new mongoose.Schema({
articles: [
    {
        source: {
            id: Number,
            name: String
        }]
 
})
