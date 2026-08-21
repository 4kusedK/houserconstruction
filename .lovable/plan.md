# Split the credential line across the stat bar

Right now "Licensed · Bonded · Insured" sits as one label under "Statewide", leaving the other two columns without a sub-line.

Change to one word per column:

- Residencial → Licensed
- Statewide → Bonded
- Commercial → Insured

Each word renders in the same small uppercase style already used, so the three columns now have matching rhythm: red rule, big word, sub-label.

## Technical notes

- `src/config/business.ts`: update the `stats` labels to `"Licensed"`, `"Bonded"`, `"Insured"`.
- No change needed in `src/routes/index.tsx` — it already renders `s.label` when present.
