const { VoteService  } = require("../service");

// List
const Count = async (req, res) => {
    try {
        const List = await VoteService.VoteList();
        const partyCounts = {};

        // Count votes for each party dynamically
        List.forEach(record => {
            if (record.party && record.party.party_name) {
                const partyName = record.party.party_name;

                // Initialize count for the party if not already present
                partyCounts[partyName] = (partyCounts[partyName] || 0) + 1;
            }
        });
        res.status(200).json({
            success: true,
            message: "All Vote SuccessFully Display Get !.....",
            data: partyCounts
        });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    };
};


module.exports = {
    Count,
}