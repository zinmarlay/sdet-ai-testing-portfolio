Day 10: Test Design Techniques

1. Equivalence Partitioning (EP)

Feature: User Registration

Requirement: Users must be at least 18 years old to register.

Test Case ID Input (Age) Test Data Group Expected Result
EP-01 25 Valid Registration succeeds
EP-02 15 Invalid Registration fails
EP-03 18 Valid Registration succeeds

2. Boundary Value Analysis (BVA)

Feature: Order Quantity

Requirement: Users can order between 1 and 10 items.

Test Case ID Input (Quantity) Expected Result
BVA-01 0 Order fails
BVA-02 1 Order succeeds
BVA-03 10 Order succeeds
BVA-04 11 Order fails

3. Decision Table Testing

Feature: User Login

Requirement: Login succeeds only when both username and password are correct.

Test Case ID Username Correct? Password Correct? Expected Result
DT-01 Yes Yes Login succeeds
DT-02 Yes No Login fails
DT-03 No Yes Login fails
DT-04 No No Login fails

4. Regression Testing

Feature: Login and Logout

Scenario: The login feature is modified.

Test Case ID Test Scenario Expected Result
REG-01 Verify login with valid credentials Login succeeds
REG-02 Verify login with invalid credentials Login fails with an appropriate error
REG-03 Verify logout after successful login User is logged out successfully

Summary

- Equivalence Partitioning: Divide input data into valid and invalid groups.
- Boundary Value Analysis: Test values at and around boundaries.
- Decision Table Testing: Test combinations of conditions and their outcomes.
- Regression Testing: Verify that existing functionality still works after changes.
