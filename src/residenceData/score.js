const STATUS_WEIGHTS = {
    'sold' : 8,
    'come_back' : 8,
    'not_home': 6,
    'not_interested': 3,
    'not_visited' : 6,
};

const VALUE_MULTIPLIES = {
    'high_value': 2,
    'medium_value' : 0,
    'low_value' : -2,
};

const HIGH_VALUE_THRESHOLD = 500000;

function calculateHomeScore(homeData) {
    const statusWeight = STATUS_WEIGHTS[homeData.status];
    const valueMultiplier = homeData.value >= HIGH_VALUE_THRESHOLD ? VALUE_MULTIPLIES['high_value'] : VALUE_MULTIPLIES['low_value'];
    const score = statusWeight + valueMultiplier;

    if (homeData.status === 'sold') return 10;

    return Math.round(score * 10) / 10;
}

export default calculateHomeScore;